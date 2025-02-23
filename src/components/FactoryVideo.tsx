import React, { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const FactoryVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="w-full py-20 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'url("https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
              <motion.div
                className="text-center z-10 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
                  Ấn nút Play để
                </h3>
                <p className="text-2xl font-semibold text-white tracking-wider bg-black/30 px-6 py-2 rounded-full shadow-lg">
                  KHÁM PHÁ NHÀ MÁY SLABSTONE
                </p>
              </motion.div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="lg"
                  className="rounded-full w-24 h-24 bg-white hover:bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10"
                  onClick={() => setIsPlaying(true)}
                >
                  <Play className="h-12 w-12 text-black fill-black ml-2" />
                </Button>
              </motion.div>
            </div>
          )}
          <iframe
            className="w-full h-full aspect-video"
            src={`https://www.youtube.com/embed/PDYhwdNi_5Y${isPlaying ? "?autoplay=1" : ""}`}
            title="Factory Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <motion.div
          className="mt-12 text-center text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed">
            Với quy mô 430.000m², đầu tư 1000 tỷ đồng và công suất 3.2 triệu
            m²/năm, SLABSTONE TRUNGDO là nhà máy sản xuất đá nung kết hiện đại
            nhất Đông Nam Á. Sở hữu công nghệ Continua+ từ Sacmi Italia, chúng
            tôi tự hào mang đến những tấm đá siêu kích thước lên đến 1600x2400mm
            - sự kết tinh hoàn hảo giữa công nghệ châu Âu và nguồn nguyên liệu
            Việt Nam chất lượng cao.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Đội ngũ 150 chuyên gia không ngừng sáng tạo, khẳng định vị thế vật
            liệu xây dựng Việt Nam trên thị trường quốc tế. Với SLABSTONE
            TRUNGDO, chúng tôi kiến tạo tương lai.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FactoryVideo;
