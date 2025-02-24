import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import ProductDetail from "./ProductDetail";
import ProductionLine from "./ProductionLine";
import TechnologyShowcase from "./TechnologyShowcase";
import FactoryVideo from "./FactoryVideo";
import NewsSection from "./NewsSection";
import BeautifulHomes from "./BeautifulHomes";
import Footer from "./Footer";
import SEO from "./SEO";
import { pageSEO } from "@/lib/seo";

interface HomeProps {
  initialSelectedProductId?: string;
}

const Home = ({ initialSelectedProductId = "" }: HomeProps) => {
  const [selectedProductId, setSelectedProductId] = React.useState(
    initialSelectedProductId,
  );

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
  };

  const handleCloseProductDetail = () => {
    setSelectedProductId("");
  };

  const handleExploreClick = () => {
    const productGrid = document.querySelector("#product-grid");
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...pageSEO.home} />
      <Header />
      <main>
        <article>
          <h1 className="sr-only">
            SLABSTONE - Nhà máy đá nung kết đầu tiên tại Việt Nam
          </h1>

          <section aria-label="Giới thiệu">
            <HeroSection onExploreClick={handleExploreClick} />
          </section>

          <section aria-label="Quy trình sản xuất">
            <ProductionLine />
          </section>

          <section aria-label="Nhà máy">
            <FactoryVideo />
          </section>

          <section aria-label="Công nghệ">
            <TechnologyShowcase />
          </section>

          <section id="product-grid" aria-label="Sản phẩm nổi bật">
            <ProductGrid onProductClick={handleProductClick} />
          </section>

          <ProductDetail
            isOpen={!!selectedProductId}
            onClose={handleCloseProductDetail}
            product={selectedProductId ? undefined : undefined}
          />

          <section aria-label="Dự án tiêu biểu">
            <BeautifulHomes />
          </section>

          <section aria-label="Tin tức và sự kiện">
            <NewsSection />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
