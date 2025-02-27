import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";
import { generateSEO } from "@/lib/seo";

const ArchitectPage = () => {
  const benefits = [
    "Tiếp cận bộ sưu tập đá cao cấp độc quyền",
    "Hỗ trợ kỹ thuật và tư vấn chuyên sâu",
    "Mẫu sản phẩm miễn phí cho dự án",
    "Đào tạo về sản phẩm và công nghệ mới",
    "Ưu đãi đặc biệt cho dự án",
    "Hỗ trợ marketing và truyền thông",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        {...generateSEO({
          title: "Hợp tác Kiến trúc sư",
          description:
            "Đồng hành cùng SLABSTONE trong việc kiến tạo không gian sống đẳng cấp. Khám phá các quyền lợi và cơ hội hợp tác dành cho Kiến trúc sư.",
          sections: [
            {
              title: "Quyền lợi",
              content: benefits,
            },
          ],
          structuredData: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hợp tác Kiến trúc sư SLABSTONE",
            description:
              "Thông tin về chương trình hợp tác dành cho Kiến trúc sư",
          },
        })}
      />
      <Header />
      <main>
        <div className="relative h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hợp tác Kiến trúc sư
            </h1>
            <p className="text-xl max-w-3xl">
              Đồng hành cùng SLABSTONE trong việc kiến tạo không gian sống đẳng
              cấp
            </p>
          </div>
        </div>

        <article className="max-w-7xl mx-auto px-4 py-16">
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

            <section className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Đăng ký hợp tác</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Công ty/Studio
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Nhập tên công ty hoặc studio"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Gửi thông tin
                </Button>
              </form>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArchitectPage;
