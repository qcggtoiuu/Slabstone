import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#333333] text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href="/nha-may"
              className="hover:text-gray-300 transition-colors"
            >
              Nhà máy
            </a>
            <a
              href="/nha-phan-phoi"
              className="hover:text-gray-300 transition-colors"
            >
              Chính sách nhà phân phối
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <Button
              variant="link"
              className="text-white p-0 h-auto font-normal hover:text-gray-300"
              onClick={() => (window.location.href = "tel:0978649797")}
            >
              Hotline: 0978649797
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            className="h-8 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-logo.png"
              alt="Slabstone"
              className="h-full"
            />
          </div>

          {/* Navigation links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
              onClick={() => (window.location.href = "/san-pham")}
            >
              Sản phẩm
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
              onClick={() => (window.location.href = "/du-an")}
            >
              Dự án
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
              onClick={() => (window.location.href = "/bang-gia")}
            >
              Bảng giá
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
              onClick={() => (window.location.href = "/tin-tuc")}
            >
              Tin tức
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
              onClick={() => (window.location.href = "/lien-he")}
            >
              Liên hệ
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
              onClick={() => (window.location.href = "/gioi-thieu")}
            >
              Về chúng tôi
            </Button>
          </div>

          {/* Navigation links - Mobile */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
