import React from "react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#333333] text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>SHOWROOM</div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Hotline: 0999999999</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="h-8">
            <img
              src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-logo.png"
              alt="Slabstone"
              className="h-full"
            />
          </div>

          {/* Navigation links */}
          <div className="flex items-center space-x-8">
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
            >
              Sản phẩm
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
            >
              Dự án
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
            >
              Showroom
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
            >
              Tin tức
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-transparent hover:text-gray-600"
            >
              Liên hệ
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
