import React, { lazy, Suspense } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import SEO from "./SEO";
import { pageSEO } from "@/lib/seo";
import { Skeleton } from "./ui/skeleton";

const ProductGrid = lazy(() => import("./ProductGrid"));
const ProductDetail = lazy(() => import("./ProductDetail"));
const ProductionLine = lazy(() => import("./ProductionLine"));
const TechnologyShowcase = lazy(() => import("./TechnologyShowcase"));
const FactoryVideo = lazy(() => import("./FactoryVideo"));
const NewsSection = lazy(() => import("./NewsSection"));
const BeautifulHomes = lazy(() => import("./BeautifulHomes"));

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

          <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
            <section aria-label="Quy trình sản xuất">
              <ProductionLine />
            </section>
          </Suspense>

          <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
            <section aria-label="Nhà máy">
              <FactoryVideo />
            </section>
          </Suspense>

          <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
            <section aria-label="Công nghệ">
              <TechnologyShowcase />
            </section>
          </Suspense>

          <Suspense fallback={<Skeleton className="h-[800px] w-full" />}>
            <section id="product-grid" aria-label="Sản phẩm nổi bật">
              <ProductGrid onProductClick={handleProductClick} />
            </section>
          </Suspense>

          <Suspense fallback={null}>
            <ProductDetail
              isOpen={!!selectedProductId}
              onClose={handleCloseProductDetail}
              product={selectedProductId ? undefined : undefined}
            />
          </Suspense>

          <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
            <section aria-label="Dự án tiêu biểu">
              <BeautifulHomes />
            </section>
          </Suspense>

          <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
            <section aria-label="Tin tức và sự kiện">
              <NewsSection />
            </section>
          </Suspense>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
