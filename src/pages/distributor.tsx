import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const DistributorPage = () => {
  const benefits = [
    "Chính sách chiết khấu hấp dẫn",
    "Hỗ trợ marketing và trưng bày sản phẩm",
    "Đào tạo sản phẩm chuyên sâu",
    "Hỗ trợ kỹ thuật 24/7",
    "Chính sách bảo hành sản phẩm dài hạn",
    "Ưu tiên trong các chương trình khuyến mãi",
  ];

  const requirements = [
    "Có showroom hoặc cửa hàng kinh doanh vật liệu xây dựng",
    "Có kinh nghiệm trong lĩnh vực phân phối đá cao cấp",
    "Có năng lực tài chính và kho bãi phù hợp",
    "Cam kết phát triển thương hiệu SLABSTONE",
    "Đội ngũ nhân viên bán hàng chuyên nghiệp",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Chính sách nhà phân phối | SLABSTONE"
        description="Trở thành đối tác của SLABSTONE và cùng nhau phát triển trong lĩnh vực đá cao cấp. Tìm hiểu về quyền lợi và điều kiện trở thành nhà phân phối."
      />
      <Header />
      <main>
        <article className="max-w-7xl mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              Chính sách Nhà phân phối
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trở thành đối tác của SLABSTONE và cùng nhau phát triển trong lĩnh
              vực đá cao cấp.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Quyền lợi đối tác</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">
                Điều kiện trở thành đối tác
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Liên hệ hợp tác</h2>
            <p className="text-gray-600 mb-8">
              Để biết thêm thông tin chi tiết về chính sách đối tác, vui lòng
              liên hệ:
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 text-lg">
              <span className="font-semibold">Hotline:</span>
              <Button
                variant="link"
                className="text-primary p-0 h-auto font-normal hover:text-primary/90"
                onClick={() => (window.location.href = "tel:0978649797")}
              >
                0978649797
              </Button>
              <span className="hidden sm:inline">|</span>
              <span className="font-semibold">Email:</span>
              <span className="text-primary">hello@slabstone.com.vn</span>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default DistributorPage;
