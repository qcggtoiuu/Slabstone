import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductionLine from "@/components/ProductionLine";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import FactoryVideo from "@/components/FactoryVideo";

const FactoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FactoryVideo />
      <div className="w-full bg-gray-50 py-12">
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
      </div>
      <ProductionLine />
      <TechnologyShowcase />
      <Footer />
    </div>
  );
};

export default FactoryPage;
