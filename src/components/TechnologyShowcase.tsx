import React from "react";
import { motion } from "framer-motion";

const TechnologyShowcase = () => {
  return (
    <div className="w-full">
      <div className="bg-black py-16 mb-0 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            CÔNG NGHỆ ĐỘC QUYỀN
          </motion.h2>
          <motion.p
            className="text-gray-300 text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Khám phá hai công nghệ độc quyền tạo nên sự khác biệt của đá
            SLABSTONE
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* BODYTECH Section */}
        <div className="relative h-[600px] overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://noithatgiakhanh.com/wp-content/uploads/2025/02/bodytechnen.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/40" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex flex-col justify-center items-center p-8 text-white text-center"
          >
            <img
              src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/Bodytech-white-rieng-1-1.png"
              alt="BODYTECH"
              className="h-16 mb-8"
            />
            <p className="max-w-xl text-lg leading-relaxed">
              BODYTECH - nơi nghệ thuật tạo hình đá đạt đến đỉnh cao hoàn mỹ.
              Quên đi những tấm đá thông thường, BODYTECH đánh dấu bước đột phá
              trong việc tái tạo vẻ đẹp tự nhiên của đá. Với công nghệ độc quyền
              này, chúng tôi tạo ra những tấm đá có kết cấu xương hoàn hảo, mô
              phỏng chính xác vẻ đẹp của đá tự nhiên, đồng thời nâng cao tính
              năng kỹ thuật vượt trội và tối ưu hóa mọi đặc tính của sản phẩm.
            </p>
          </motion.div>
        </div>

        {/* VEINTECH Section */}
        <div className="relative h-[600px] overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://noithatgiakhanh.com/wp-content/uploads/2025/02/veintechnen.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/40" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex flex-col justify-center items-center p-8 text-white text-center"
          >
            <img
              src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/Vientech-white-rieng-1.png"
              alt="VEINTECH"
              className="h-16 mb-8"
            />
            <p className="max-w-xl text-lg leading-relaxed">
              VEINTECH không đơn thuần là một công nghệ - đây là nghệ thuật tạo
              hình đường vân tinh tế đỉnh cao. Bằng việc tái hiện hoàn hảo những
              đường vân tự nhiên và kiểm soát tuyệt đối lượng khoáng chất,
              VEINTECH tạo nên độ đồng nhất tuyệt đối giữa bề mặt và phần thân
              của tấm đá. Mỗi đường vân được thiết kế tỉ mỉ mang đến màu sắc
              tinh tế, sống động như chính đá tự nhiên.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyShowcase;
