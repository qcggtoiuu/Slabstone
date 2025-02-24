import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import { pageSEO } from "@/lib/seo";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO {...pageSEO.contact} />
      <Header />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Liên hệ</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi nếu bạn cần tư vấn hoặc có bất kỳ thắc
              mắc nào
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Họ và tên" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Input type="tel" placeholder="Số điện thoại" />
                </div>
                <div>
                  <Textarea
                    placeholder="Nội dung tin nhắn"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Gửi tin nhắn
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Thông tin liên hệ</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Địa chỉ</h3>
                    <p className="text-gray-600">Nghi Văn, Nghi Lộc, Nghệ An</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Điện thoại</h3>
                    <p className="text-gray-600">
                      <Button
                        variant="link"
                        className="p-0 h-auto font-normal hover:text-primary"
                        onClick={() =>
                          (window.location.href = "tel:0978649797")
                        }
                      >
                        0978649797
                      </Button>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">hello@slabstone.com.vn</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.850975627656!2d105.59999631538383!3d18.67899998731843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce69764d2c13%3A0x6c7c8e8c4b3d3b3f!2zTmdo4buLIFbEg24sIE5naGkgTOG7mWMsIE5naOG7hyBBbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1621234567890!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
