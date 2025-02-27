import React from "react";
import { motion } from "framer-motion";
import { Building2, Landmark, Users } from "lucide-react";
import { Button } from "./ui/button";

const PartnershipSection = () => {
  const partnerships = [
    {
      icon: Building2,
      title: "Nhà phân phối/ đại lý",
      description: "Trở thành đối tác phân phối sản phẩm SLABSTONE",
      link: "/nha-phan-phoi",
      image:
        "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800",
      benefits: [
        "Chính sách chiết khấu hấp dẫn",
        "Hỗ trợ marketing",
        "Đào tạo chuyên sâu",
      ],
    },
    {
      icon: Landmark,
      title: "Dự án",
      description: "Hợp tác phát triển dự án với SLABSTONE",
      link: "/du-an",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      benefits: ["Tư vấn kỹ thuật", "Hỗ trợ thiết kế", "Giá ưu đãi đặc biệt"],
    },
    {
      icon: Users,
      title: "Kiến trúc sư",
      description: "Đồng hành cùng SLABSTONE trong các dự án thiết kế",
      link: "/kien-truc-su",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
      benefits: [
        "Mẫu sản phẩm miễn phí",
        "Hỗ trợ kỹ thuật",
        "Đào tạo sản phẩm",
      ],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">HỢP TÁC VỚI SLABSTONE</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cùng SLABSTONE kiến tạo không gian sống đẳng cấp và phát triển bền
            vững
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerships.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <item.icon className="w-16 h-16 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>

                <div className="space-y-2 mb-6">
                  {item.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-[#0f172a] hover:bg-[#0f172a]/90 text-white"
                  onClick={() => (window.location.href = item.link)}
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
