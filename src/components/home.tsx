import React, { lazy, Suspense } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import SEO from "./SEO";
import { generateSEO } from "@/lib/seo";
import { Skeleton } from "./ui/skeleton";

const ProductGrid = lazy(() => import("./ProductGrid"));
const ProductDetail = lazy(() => import("./ProductDetail"));
const ProductionLine = lazy(() => import("./ProductionLine"));
const TechnologyShowcase = lazy(() => import("./TechnologyShowcase"));
const FactoryVideo = lazy(() => import("./FactoryVideo"));
const NewsSection = lazy(() => import("./NewsSection"));
const BeautifulHomes = lazy(() => import("./BeautifulHomes"));
const PartnershipSection = lazy(() => import("./PartnershipSection"));
const WhyChooseUs = lazy(() => import("./WhyChooseUs"));

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
      <SEO
        {...generateSEO({
          title: "Trang chủ",
          description:
            "SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công nghệ tiên tiến từ SACMI Italia.",
          image:
            "https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg",
          sections: [
            {
              title: "Giới thiệu",
              content:
                "Nhà máy đá nung kết đầu tiên tại Việt Nam với quy mô 430.000m², đầu tư 1000 tỷ đồng và công suất 3.2 triệu m²/năm",
            },
            {
              title: "Sản phẩm",
              content: [
                "Đá cao cấp",
                "Đá thạch anh",
                "Đá marble",
                "Đá granite",
                "Đá tự nhiên",
                "Đá nhân tạo",
              ],
            },
            {
              title: "Công nghệ",
              content: [
                "BODYTECH - Công nghệ tạo hình đá đạt đến đỉnh cao hoàn mỹ",
                "VEINTECH - Nghệ thuật tạo hình đường vân tinh tế đỉnh cao",
                "CONTINUA+ 2000 - Dây chuyền sản xuất hiện đại nhất Việt Nam",
              ],
            },
          ],
          structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SLABSTONE",
            url: "https://slabstone.vn",
            logo: "https://slabstone.vn/wp-content/uploads/2023/02/cropped-soc-do.png",
            description:
              "Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công nghệ tiên tiến từ SACMI Italia.",
          },
        })}
      />
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

          <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
            <section aria-label="Ưu điểm">
              <WhyChooseUs />
            </section>
          </Suspense>

          <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
            <section aria-label="Hợp tác">
              <PartnershipSection />
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
