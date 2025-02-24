import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const ShowroomPage = () => {
  const showrooms = [
    {
      id: 1,
      city: "Hà Nội",
      address:
        "Tầng 2, toà nhà N03-T6, Đoàn Ngoại Giao, Phường Xuân Tảo, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
      mapUrl: "https://maps.app.goo.gl/r8ugcFVGLkoJi3Z8A",
      phone: "0978649797",
      email: "hello@slabstone.com.vn",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      hours: "8:00 - 17:30 (T2-T7)",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Hệ thống Showroom | SLABSTONE"
        description="Ghé thăm showroom SLABSTONE để trải nghiệm trực tiếp các sản phẩm đá cao cấp và nhận tư vấn từ đội ngũ chuyên viên của chúng tôi."
      />
      <Header />
      <main>
        <article className="max-w-7xl mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Hệ thống Showroom</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ghé thăm showroom SLABSTONE để trải nghiệm trực tiếp các sản phẩm
              đá cao cấp và nhận tư vấn từ đội ngũ chuyên viên của chúng tôi.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showrooms.map((showroom) => (
              <section
                key={showroom.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={showroom.image}
                    alt={`Showroom ${showroom.city}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">{showroom.city}</h2>

                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>{showroom.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <Button
                        variant="link"
                        className="text-gray-600 p-0 h-auto font-normal hover:text-gray-900"
                        onClick={() =>
                          (window.location.href = `tel:${showroom.phone}`)
                        }
                      >
                        {showroom.phone}
                      </Button>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <span>{showroom.email}</span>
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-sm">Giờ mở cửa: {showroom.hours}</p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ShowroomPage;
