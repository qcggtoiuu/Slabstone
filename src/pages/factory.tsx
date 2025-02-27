import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import ProductionLine from "@/components/ProductionLine";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import FactoryVideo from "@/components/FactoryVideo";
import SEO from "@/components/SEO";
import { generateSEO } from "@/lib/seo";

const FactoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        {...generateSEO({
          title: "Nhà máy SLABSTONE",
          description:
            "Khám phá nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á của SLABSTONE với quy mô 430.000m², công suất 3.2 triệu m²/năm và công nghệ tiên tiến từ SACMI Italia.",
          image:
            "https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg",
          sections: [
            {
              title: "Quy mô",
              content: [
                "Diện tích: 430.000m²",
                "Vốn đầu tư: 1000 tỷ đồng",
                "Công suất: 3.2 triệu m²/năm",
              ],
            },
            {
              title: "Công nghệ",
              content: [
                "Dây chuyền CONTINUA+ 2000 từ SACMI Italia",
                "Hệ thống kiểm soát MDX tiên tiến",
                "Dây chuyền 5 tầng với chiều dài 260m",
              ],
            },
            {
              title: "Địa chỉ",
              content: "Nghi Văn, Nghi Lộc, Nghệ An",
            },
          ],
        })}
      />
      <Header />
      <main>
        <article>
          <h1 className="sr-only">
            Nhà máy SLABSTONE - Công nghệ sản xuất đá nung kết hiện đại
          </h1>

          <section aria-label="Video nhà máy">
            <FactoryVideo />
          </section>

          <section aria-label="Địa chỉ" className="w-full bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center gap-4">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">Nghi Văn, Nghi Lộc, Nghệ An</span>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/ua9LXVbnoPHm5rdL9",
                      "_blank",
                    )
                  }
                >
                  Xem bản đồ
                </Button>
              </div>
            </div>
          </section>

          <section aria-label="Quy trình sản xuất">
            <ProductionLine />
          </section>

          <section aria-label="Công nghệ">
            <TechnologyShowcase />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FactoryPage;
