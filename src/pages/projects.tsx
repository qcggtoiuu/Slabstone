import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Hotel, Hospital, Palmtree } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { generateSEO } from "@/lib/seo";

const ProjectsPage = () => {
  const projectTypes = [
    {
      icon: Building2,
      title: "Toà nhà",
      description: "Các dự án toà nhà văn phòng, thương mại",
    },
    {
      icon: Hotel,
      title: "Khách sạn",
      description: "Các dự án khách sạn cao cấp",
    },
    {
      icon: Hospital,
      title: "Bệnh viện",
      description: "Các dự án bệnh viện, cơ sở y tế",
    },
    {
      icon: Palmtree,
      title: "Khu nghỉ dưỡng",
      description: "Các dự án resort, khu nghỉ dưỡng",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        {...generateSEO({
          title: "Dự án",
          description:
            "Hợp tác cùng SLABSTONE trong các dự án toà nhà, khách sạn, bệnh viện và khu nghỉ dưỡng. Liên hệ ngay để được tư vấn.",
          sections: [
            {
              title: "Loại dự án",
              content: ["Toà nhà", "Khách sạn", "Bệnh viện", "Khu nghỉ dưỡng"],
            },
          ],
        })}
      />
      <Header />
      <main>
        <section className="relative h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1500")',
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Dự án SLABSTONE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-3xl mb-8"
            >
              Chúng tôi sẵn sàng hợp tác với các dự án của bạn
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Hợp tác cùng SLABSTONE
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                SLABSTONE cung cấp giải pháp đá cao cấp cho nhiều loại dự án
                khác nhau
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {projectTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <type.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-2xl font-bold mb-6">
                    Liên hệ hợp tác dự án
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Hãy để lại thông tin để được tư vấn về giải pháp đá cao cấp
                    cho dự án của bạn
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Họ và tên
                        </label>
                        <Input placeholder="Nhập họ và tên" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Số điện thoại
                        </label>
                        <Input type="tel" placeholder="Nhập số điện thoại" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="Nhập email" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Tên dự án
                      </label>
                      <Input placeholder="Nhập tên dự án" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Mô tả dự án
                      </label>
                      <Textarea
                        placeholder="Mô tả ngắn về dự án của bạn"
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Gửi thông tin
                    </Button>
                  </form>
                </div>

                <div className="relative hidden lg:block">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800")',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
