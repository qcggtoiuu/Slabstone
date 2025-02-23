import React from "react";
import { motion } from "framer-motion";

const ProductionLine = () => {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://www.sacmi.com/SacmiCorporate/media/ceramics/continua/linea_continua_2024.png"
              alt="CONTINUA+ 2000 Production Line"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Công nghệ CONTINUA+ 2000 đột phá
            </h2>
            <p className="text-lg text-gray-600">
              Bạn đã từng mơ ước sở hữu những tấm đá hoàn mỹ với kích thước
              khổng lồ mà không có điểm khiếm khuyết? SLABSTONE chính là câu trả
              lời với công nghệ CONTINUA+ 2000 đột phá.
            </p>
            <p className="text-lg text-gray-600">
              Được sinh ra từ sự hợp tác giữa Trung Đô và những gã khổng lồ hàng
              đầu thế giới trong ngành công nghiệp đá như Sacmi, Esmalglass
              Itaca & Fritta - SLABSTONE mang đến:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Đá nung kết siêu khổ với độ hoàn thiện tuyệt đối</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Hệ thống kiểm soát MDX tiên tiến, đảm bảo từng mm² đều hoàn
                  hảo
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Dây chuyền 5 tầng hiện đại với chiều dài 260m - Quy mô lớn
                  nhất Việt Nam
                </span>
              </li>
            </ul>
            <p className="text-lg font-medium text-gray-800 mt-6">
              Với SLABSTONE, chúng tôi không chỉ sản xuất đá - chúng tôi kiến
              tạo những kiệt tác. Mỗi tấm đá là một tác phẩm nghệ thuật, nơi
              công nghệ và đam mê hội tụ để tạo nên vẻ đẹp vĩnh cửu cho không
              gian của bạn.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              Hãy để SLABSTONE nâng tầm không gian sống của bạn lên một đẳng cấp
              mới!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductionLine;
