import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductionLine from "@/components/ProductionLine";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import FactoryVideo from "@/components/FactoryVideo";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về chúng tôi</h1>
          <p className="text-xl max-w-3xl">
            SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tầm nhìn</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Trở thành nhà sản xuất đá nung kết hàng đầu Đông Nam Á, mang đến
                những sản phẩm chất lượng cao với công nghệ tiên tiến nhất từ
                châu Âu.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Sứ mệnh</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Kiến tạo không gian sống đẳng cấp thông qua việc cung cấp các
                sản phẩm đá nung kết chất lượng cao, thân thiện với môi trường
                và mang tính bền vững.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Công nghệ</h2>
            <TechnologyShowcase />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nhà máy</h2>
            <FactoryVideo />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Quy trình sản xuất
            </h2>
            <ProductionLine />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
