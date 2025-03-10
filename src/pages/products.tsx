import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";
import { generateProductSEO } from "@/lib/seo";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        {...generateProductSEO({
          type: "product",
          title: "Bộ sưu tập đá cao cấp",
          description:
            "Khám phá bộ sưu tập đá cao cấp SLABSTONE với đa dạng màu sắc, họa tiết và ứng dụng. Sản phẩm chất lượng cao với công nghệ tiên tiến từ SACMI Italia.",
          image:
            "https://slabstone.vn/wp-content/uploads/2023/02/collection-cover.jpg",
          sections: [
            {
              title: "Dòng sản phẩm",
              content: [
                "Đá nung kết cao cấp",
                "Đá trang trí nội thất",
                "Đá ốp lát cao cấp",
              ],
            },
            {
              title: "Ứng dụng",
              content: [
                "Ốp tường",
                "Lát sàn",
                "Trang trí nội thất",
                "Mặt bàn, quầy bar",
              ],
            },
          ],
        })}
      />
      <Header />
      <main>
        <article className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">
              Bộ sưu tập đá cao cấp SLABSTONE
            </h1>
            <div className="prose max-w-none mb-8">
              <p>
                Khám phá bộ sưu tập đá cao cấp SLABSTONE với đa dạng màu sắc,
                họa tiết và ứng dụng. Sản phẩm chất lượng cao với công nghệ tiên
                tiến từ SACMI Italia.
              </p>
            </div>
            <ProductGrid />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
