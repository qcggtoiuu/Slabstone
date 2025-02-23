import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { fetchProducts } from "@/lib/sheets";
import { Product } from "@/types/product";

interface ProductGridProps {
  onProductClick?: (productId: string) => void;
}

const ProductGrid = ({ onProductClick = () => {} }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
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
      if (key === "surface") return product.surface === value;
      if (key === "application") return product.application === value;
      return true;
    });
  });

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <FilterBar
        onFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
      />

      <div className="max-w-7xl mx-auto py-8 px-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Không tìm thấy sản phẩm phù hợp với bộ lọc.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.code}
                id={product.code}
                name={product.name}
                image={product.images.image1}
                price={product.price}
                category={product.collection}
                description={product.description}
                onClick={() => handleProductClick(product)}
              />
            ))}
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
