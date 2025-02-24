import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { fetchProducts } from "@/lib/sheets";
import { Product, FilterOption } from "@/types/product";

interface ProductGridProps {
  onProductClick?: (productId: string) => void;
}

const ProductGrid = ({ onProductClick = () => {} }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});
  const [visibleProducts, setVisibleProducts] = useState<number>(
    window.innerWidth >= 1024 ? 18 : 12,
  );
  const [filterOptions, setFilterOptions] = useState<{
    colors: FilterOption[];
    patterns: FilterOption[];
    applications: FilterOption[];
  }>({
    colors: [],
    patterns: [],
    applications: [],
  });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);

      // Extract unique filter options from products
      const colors = new Set<string>();
      const patterns = new Set<string>();
      const applications = new Set<string>();

      data.forEach((product) => {
        if (product.color) colors.add(product.color);
        if (product.surface) patterns.add(product.surface);
        if (product.application) applications.add(product.application);
      });

      setFilterOptions({
        colors: Array.from(colors).map((value, id) => ({
          id: String(id + 1),
          label: value,
          value: value,
        })),
        patterns: Array.from(patterns).map((value, id) => ({
          id: String(id + 1),
          label: value,
          value: value,
        })),
        applications: Array.from(applications).map((value, id) => ({
          id: String(id + 1),
          label: value,
          value: value,
        })),
      });
    };
    loadProducts();
  }, []);

  const handleFilterChange = (type: string, value: string) => {
    setSelectedFilters((prev) => {
      if (value === "") {
        const newFilters = { ...prev };
        delete newFilters[type];
        return newFilters;
      }
      return { ...prev, [type]: value };
    });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    onProductClick(product.code);
  };

  const filteredProducts = products.filter((product) => {
    return Object.entries(selectedFilters).every(([key, value]) => {
      if (key === "color") return product.color === value;
      if (key === "pattern") return product.surface === value;
      if (key === "application") return product.application === value;
      return true;
    });
  });

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <FilterBar
        onFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
        colorOptions={filterOptions.colors}
        patternOptions={filterOptions.patterns}
        applicationOptions={filterOptions.applications}
      />

      <div className="max-w-7xl mx-auto py-8 px-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Không tìm thấy sản phẩm phù hợp với bộ lọc.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 [&>*]:w-full">
              {filteredProducts
                .slice(0, visibleProducts)
                .map((product, index) => (
                  <ProductCard
                    key={`${product.code || index}`}
                    id={product.code}
                    name={product.name}
                    image={product.images.image1}
                    price={product.price}
                    category={product.collection}
                    description={product.description}
                    surface={product.surface}
                    thickness={product.thickness}
                    dimensions={product.dimensions}
                    onClick={() => handleProductClick(product)}
                  />
                ))}
            </div>

            {filteredProducts.length > visibleProducts && (
              <div className="flex justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#0f172a] hover:bg-[#0f172a]/90 text-white px-8"
                  onClick={() =>
                    setVisibleProducts(
                      (prev) => prev + (window.innerWidth >= 1024 ? 18 : 12),
                    )
                  }
                >
                  Xem thêm sản phẩm
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      <ProductDetail
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct || undefined}
      />
    </div>
  );
};

export default ProductGrid;
