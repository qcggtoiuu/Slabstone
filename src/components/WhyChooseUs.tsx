import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Thermometer,
  Droplets,
  Hammer,
  Maximize,
  Factory,
  Landmark,
  Flag,
  X,
} from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

const WhyChooseUs = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const advantages = [
    {
      icon: Shield,
      title: "Chịu lực",
      description: "Khả năng chịu lực vượt trội so với đá thông thường",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
      image:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-chiu-luc.jpg",
    },
    {
      icon: Thermometer,
      title: "Chịu nhiệt",
      description:
        "Công nghệ nung kết giúp đá chịu được nhiệt độ cao, vượt trội so với các loại đá khác",
      color: "bg-red-50",
      iconColor: "text-red-500",
      image:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-chiu-nhiet.jpg",
    },
    {
      icon: Droplets,
      title: "Chống thấm ố",
      description:
        "Nung ở 1200 độ C, hút ẩm toàn bộ, không còn khả năng hút nước",
      color: "bg-cyan-50",
      iconColor: "text-cyan-500",
      image: "",
    },
    {
      icon: Hammer,
      title: "Chống trầy xước",
      description: "Bề mặt cứng cáp, khó bị trầy xước trong quá trình sử dụng",
      color: "bg-amber-50",
      iconColor: "text-amber-500",
      image: "",
    },
    {
      icon: Maximize,
      title: "Khổ lớn",
      description:
        "Sản xuất được các tấm đá có kích thước lớn lên tới 1600*2400 (mm), đáp ứng mọi nhu cầu thiết kế",
      color: "bg-emerald-50",
      iconColor: "text-emerald-500",
      image:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-kho-lon.jpg",
    },
    {
      icon: Factory,
      title: "Công nghệ Italy",
      description:
        "Dây chuyền nhập khẩu 100% công nghệ Italy, tự động hóa 100% bằng Robot (hãng Sacmi)",
      color: "bg-indigo-50",
      iconColor: "text-indigo-500",
      image:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-cong-nghe-italy.jpg",
    },
    {
      icon: Landmark,
      title: "Đầu tư lớn",
      description:
        "Vốn đầu tư 1000 tỷ đồng cho công nghệ và cơ sở vật chất hiện đại",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
      image:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-day-chuyen-1km.jpg",
    },
    {
      icon: Flag,
      title: "Tiên phong",
      description: "Nhà máy đá nung kết đầu tiên tại Việt Nam",
      color: "bg-rose-50",
      iconColor: "text-rose-500",
      image:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-nha-may-tien-phong.jpg",
    },
  ];

  const selectedAdvantage = advantages.find(
    (adv) => adv.title === selectedFeature,
  );

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-transparent to-gray-300"></div>
          <div className="inline-block relative">
            <span className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gray-300"></span>
            <span className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-gray-300"></span>
            <h2 className="text-5xl font-bold mb-6 px-8 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white inline-block">
              VÌ SAO CHỌN SLABSTONE
            </h2>
            <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-gray-300"></span>
            <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gray-300"></span>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-8">
            Đá nung kết SLABSTONE vượt trội với 8 ưu điểm nổi bật, mang đến giải
            pháp hoàn hảo cho không gian sống của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.color} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer`}
              onClick={() => item.image && setSelectedFeature(item.title)}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 ${item.iconColor} mb-4 flex items-center justify-center rounded-full bg-white shadow-sm`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedFeature}
        onOpenChange={() => setSelectedFeature(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          {selectedAdvantage?.image && (
            <div className="relative">
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedAdvantage.image}
                alt={selectedAdvantage.title}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-bold">{selectedAdvantage.title}</h3>
                <p>{selectedAdvantage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WhyChooseUs;
