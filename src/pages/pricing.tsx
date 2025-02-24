import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Bảng giá sản phẩm</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để nhận báo giá chi tiết và tư vấn về sản
              phẩm
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Button size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Tải bảng giá mới nhất
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for pricing categories */}
            {[
              "Đá cao cấp",
              "Đá thạch anh",
              "Đá marble",
              "Đá granite",
              "Đá tự nhiên",
              "Đá nhân tạo",
            ].map((category) => (
              <div
                key={category}
                className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <p className="text-gray-600 mb-4">
                  Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí
                </p>
                <Button variant="outline" className="w-full">
                  Yêu cầu báo giá
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
