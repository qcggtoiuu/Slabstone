import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Xu hướng thiết kế nội thất với đá cao cấp 2024",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      date: "15/03/2024",
      excerpt:
        "Khám phá những xu hướng mới nhất trong việc sử dụng đá cao cấp cho thiết kế nội thất...",
    },
    {
      id: 2,
      title: "SLABSTONE ra mắt bộ sưu tập mới",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800",
      date: "10/03/2024",
      excerpt:
        "Bộ sưu tập mới với những mẫu đá độc đáo, kết hợp công nghệ tiên tiến...",
    },
    {
      id: 3,
      title: "Công nghệ sản xuất đá nhân tạo hiện đại",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      date: "05/03/2024",
      excerpt:
        "Tìm hiểu quy trình sản xuất đá nhân tạo với công nghệ tiên tiến nhất...",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tin tức & Sự kiện</h2>
          <p className="text-gray-600">
            Cập nhật những tin tức mới nhất từ SLABSTONE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <Button variant="ghost" className="group hover:text-primary">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
