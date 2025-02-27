import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductionLine from "@/components/ProductionLine";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import FactoryVideo from "@/components/FactoryVideo";
import SEO from "@/components/SEO";
import { generateSEO } from "@/lib/seo";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Hammer,
  Utensils,
  Droplets,
  Beaker,
  Palette,
  Flame,
} from "lucide-react";

const AboutPage = () => {
  const factoryStats = [
    {
      title: "QUY MÔ",
      subtitle: "Total Area",
      value: "430.000 m²",
    },
    {
      title: "TỔNG ĐẦU TƯ",
      subtitle: "Total capital",
      value: "1000 tỷ",
    },
    {
      title: "CÔNG SUẤT",
      subtitle: "Capacity",
      value: "3.2 tr m²/năm",
    },
    {
      title: "NHÂN LỰC",
      subtitle: "Employees",
      value: "150 người",
    },
  ];

  const advantages = [
    {
      title: "KÍCH THƯỚC VƯỢT TRỘI",
      subtitle: "ULTRA SIZES",
      description:
        "Với kích thước lên đến 1600 x 2400 cm, tương đương với 3.84 m², SLABSTONE tạo ra tiêu chuẩn mới cho kiến trúc dự án nơi kích thước quyết định đến tính thẩm mỹ.",
      englishDescription:
        "With dimensions up to 1600 x 2400 cm, equivalent to 3.84 m², SLABSTONE sets a new standard for project architecture where size determines aesthetics.",
    },
    {
      title: "ỨNG DỤNG KHÔNG GIỚI HẠN",
      subtitle: "BOUNDLESS APPLICATIONS",
      description:
        "Các không gian ứng dụng được mở ra và tầm kích thước và đặc tính kỹ thuật không còn là rào cản với SLABSTONE",
      englishDescription:
        "The application designs are endlessly opened when sizes and technical specifications are no longer a limitation with SLABSTONE.",
    },
    {
      title: "SẢN XUẤT TẠI VIỆT NAM",
      subtitle: "MADE IN VIETNAM",
      description:
        "98% nguyên liệu sản phẩm được điều chế từ phòng S-Lab tại Nghệ An và lấy từ nguồn địa phương giúp chúng tôi kiểm soát điều kiện chất lượng nguyên vật liệu tốt nhất.",
      englishDescription:
        "98% of product materials are prepared from S-Lab in Nghe An and sourced from local sources, helping us to control the best quality of raw materials.",
    },
  ];

  const features = [
    {
      title: "Nguyên vật liệu chất lượng cao",
      subtitle: "High quality materials",
      icon: "Shield",
    },
    {
      title: "Dễ vệ sinh",
      subtitle: "Easy to clean",
      icon: "Sparkles",
    },
    {
      title: "Chống trầy xước",
      subtitle: "Scratch & impact resistance",
      icon: "Hammer",
    },
    {
      title: "An toàn thực phẩm",
      subtitle: "Safe for food",
      icon: "Utensils",
    },
    {
      title: "Chống thấm",
      subtitle: "Waterproof",
      icon: "Droplets",
    },
    {
      title: "Chống ố và hóa chất",
      subtitle: "Chemical & stain resistance",
      icon: "Beaker",
    },
    {
      title: "Bền màu",
      subtitle: "Color fast",
      icon: "Palette",
    },
    {
      title: "Chống cháy",
      subtitle: "Fire resistance",
      icon: "Flame",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        {...generateSEO({
          title: "Về chúng tôi",
          description:
            "SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á với quy mô 430.000m², đầu tư 1000 tỷ đồng và công suất 3.2 triệu m²/năm.",
          image:
            "https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg",
          sections: [
            {
              title: "Tầm nhìn",
              content:
                "Trở thành nhà sản xuất đá nung kết hàng đầu Đông Nam Á, mang đến những sản phẩm chất lượng cao với công nghệ tiên tiến nhất từ châu Âu.",
            },
            {
              title: "Sứ mệnh",
              content:
                "Kiến tạo không gian sống đẳng cấp thông qua việc cung cấp các sản phẩm đá nung kết chất lượng cao, thân thiện với môi trường và mang tính bền vững.",
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
        })}
      />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NHÀ MÁY HIỆN ĐẠI NHẤT ĐÔNG NAM Á
          </h1>
          <p className="text-xl max-w-3xl">
            THE MOST MODERN FACTORY IN SOUTHEAST ASIA
          </p>
        </div>
      </div>

      {/* Factory Stats */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {factoryStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-lg font-semibold text-gray-600">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{stat.subtitle}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">TẦM NHÌN</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Trở thành nhà máy sản xuất vật liệu xây dựng gốm sứ tiên phong
                tại Việt Nam sử dụng công nghệ tiên tiến nhất và thân thiện với
                môi trường.
              </p>
              <p className="text-gray-500 mt-4">
                To become the pioneer in ceramics industry in Vietnam using the
                most advanced and eco-friendly technology.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">SẢN PHẨM</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Đá nung kết khổ lớn và gạch ốp lát cao cấp với kích thước và
                chất lượng vượt trội là những sản phẩm chủ lực của nhà máy
                SLABSTONE TRUNGDO. Các sản phẩm có thể đạt kích thước lên đến
                1600x2400mm và độ dày 20mm.
              </p>
              <p className="text-gray-500 mt-4">
                Large-format sintered stones and high-grade porcelain tiles with
                superior dimensions and quality are the flagship products of
                SLABSTONE TRUNGDO factory.
              </p>
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center">
              TẠI SAO CHỌN SLABSTONE?
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              WHY SLABSTONE?
            </p>

            <div className="space-y-16">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-2xl font-bold mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-500 mb-4">{advantage.subtitle}</p>
                    <p className="text-gray-600 mb-4">
                      {advantage.description}
                    </p>
                    <p className="text-gray-500 text-sm italic">
                      {advantage.englishDescription}
                    </p>
                  </div>
                  <div
                    className={`bg-gray-100 h-64 rounded-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    {/* Placeholder for image */}
                    <div className="h-full flex items-center justify-center">
                      <img
                        src={
                          index === 0
                            ? "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800"
                            : index === 1
                              ? "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
                              : "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                        }
                        alt={advantage.title}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16 bg-gray-50 py-16 px-4 rounded-xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              ĐẶC TÍNH SẢN PHẨM
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = {
                  Shield: Shield,
                  Sparkles: Sparkles,
                  Hammer: Hammer,
                  Utensils: Utensils,
                  Droplets: Droplets,
                  Beaker: Beaker,
                  Palette: Palette,
                  Flame: Flame,
                }[feature.icon];

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary/10">
                      <IconComponent className="w-8 h-8 text-gray-500 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    </div>
                    <h3 className="font-semibold mb-1 transition-all duration-300 group-hover:text-primary group-hover:font-bold group-hover:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-700">
                      {feature.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              TIÊN PHONG TRONG CÔNG NGHỆ MỚI
            </h2>
            <p className="text-center text-gray-600 mb-12">
              INNOVATION AT ITS FINEST
            </p>
            <TechnologyShowcase />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">NHÀ MÁY</h2>
            <FactoryVideo />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              QUY TRÌNH SẢN XUẤT
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
