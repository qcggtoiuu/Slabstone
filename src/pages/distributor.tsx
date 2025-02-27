import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { generateSEO } from "@/lib/seo";

const DistributorPage = () => {
  const dealerBenefits = [
    "Hỗ trợ toàn diện: bảng hiệu, nhận diện thương hiệu",
    "Mẫu sản phẩm: Tặng khi đạt doanh số năm",
    "Công cụ bán hàng: Catalogue, tài liệu, kịch bản, hộp mẫu, cây trưng bày",
    "Phần mềm Slabstone.App: Thiết kế, báo giá, quản lý kho (trị giá 200 triệu)",
    "Đào tạo chuyên sâu: Bán hàng, marketing đa nền tảng",
    "Kết nối thị trường: Tổng thầu, chủ đầu tư, kiến trúc sư",
    "Hỗ trợ Sale tại địa bàn",
  ];

  const distributorBenefits = [
    "Thiết kế miễn phí",
    "Hỗ trợ toàn diện: bảng hiệu, nhận diện thương hiệu",
    "Mẫu sản phẩm: Tặng khi đạt doanh số năm",
    "Công cụ bán hàng: Catalogue, tài liệu, kịch bản, hộp mẫu, cây trưng bày",
    "Phần mềm Slabstone.App: Thiết kế, báo giá, quản lý kho (trị giá 200 triệu)",
    "Đào tạo chuyên sâu: Bán hàng, marketing đa nền tảng",
    "Kết nối thị trường: Tổng thầu, chủ đầu tư, kiến trúc sư",
    "Hỗ trợ Sale tại địa bàn",
    "Thưởng doanh số & khuyến mãi đặc biệt theo đợt",
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
        {...generateSEO({
          title: "Chính sách nhà phân phối",
          description:
            "Trở thành đối tác của SLABSTONE và cùng nhau phát triển trong lĩnh vực đá cao cấp. Tìm hiểu về quyền lợi và điều kiện trở thành nhà phân phối.",
          sections: [
            {
              title: "Quyền lợi đối tác",
              content: [...dealerBenefits, ...distributorBenefits],
            },
            {
              title: "Điều kiện trở thành đối tác",
              content: requirements,
            },
          ],
          structuredData: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Chính sách nhà phân phối SLABSTONE",
            description:
              "Thông tin về chính sách và điều kiện trở thành nhà phân phối của SLABSTONE",
            provider: {
              "@type": "Organization",
              name: "SLABSTONE",
              url: "https://slabstone.vn",
            },
          },
        })}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-2 border-gray-200 overflow-hidden">
              <CardHeader className="bg-gray-900 text-white text-center py-6">
                <CardTitle className="text-2xl font-bold">
                  ĐẠI LÝ CẤP 1
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">QUYỀN LỢI:</h3>
                <div className="space-y-3">
                  {dealerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary overflow-hidden">
              <CardHeader className="bg-primary text-white text-center py-6 relative">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  PREMIUM
                </div>
                <CardTitle className="text-2xl font-bold">
                  TỔNG PHÂN PHỐI
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">QUYỀN LỢI:</h3>
                <div className="space-y-3">
                  {distributorBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

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
