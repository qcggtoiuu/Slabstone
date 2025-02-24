import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import ProductionLine from "@/components/ProductionLine";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import FactoryVideo from "@/components/FactoryVideo";
import SEO from "@/components/SEO";
import { pageSEO } from "@/lib/seo";

const FactoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO {...pageSEO.factory} />
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
