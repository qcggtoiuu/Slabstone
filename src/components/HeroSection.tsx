import React from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  onExploreClick?: () => void;
}

const HeroSection = ({
  title = "Nhà máy Đá Nung Kết đầu tiên tại Việt Nam",
  subtitle = "Khám phá bộ sưu tập mẫu đá nung kết cao cấp của chúng tôi, được chế tác để tạo nên vẻ đẹp vĩnh cửu và vượt mọi giới hạn",
  onExploreClick = () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/KQF2qSRpNTg?autoplay=1&mute=1&controls=0&loop=1&playlist=KQF2qSRpNTg&showinfo=0"
            title="Background Video"
            className="absolute w-full h-[200%] -top-[50%] left-1/2 -translate-x-1/2 pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={onExploreClick}
            className="bg-white text-black hover:bg-white/90"
          >
            Khám phá ngay
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2">Cuộn xuống để xem thêm</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
