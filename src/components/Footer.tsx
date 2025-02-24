import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img
              src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/230207_SLABSTONE_LOGO_WhiteRed-1.png"
              alt="SLABSTONE"
              className="h-8 mb-6"
            />
            <p className="text-gray-400 mb-6">
              Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công
              nghệ tiên tiến từ SACMI Italia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/danungketslabstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@danungketslabstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@danungketslabstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Dự án
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Thông tin liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  Nghi Văn, Nghi Lộc, Nghệ An
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <Button
                  variant="link"
                  className="text-gray-400 p-0 h-auto font-normal hover:text-white"
                  onClick={() => (window.location.href = "tel:0978649797")}
                >
                  0978649797
                </Button>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">hello@slabstone.com.vn</span>
              </li>
            </ul>
          </div>

          {/* Showroom */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Showroom</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <strong className="text-white">Hà Nội:</strong>
                <br />
                Tầng 2, toà nhà N03-T6, Đoàn Ngoại Giao, Phường Xuân Tảo, Quận
                Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 SLABSTONE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
