import React from "react";
import { motion } from "framer-motion";

const BeautifulHomes = () => {
  const projects = [
    {
      id: 1,
      title: "Biệt thự hiện đại The Manor",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      category: "Biệt thự",
    },
    {
      id: 2,
      title: "Penthouse Landmark 81",
      image:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/landmark.jpg",
      category: "Căn hộ",
    },
    {
      id: 3,
      title: "Villa Đà Lạt",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      category: "Biệt thự",
    },
    {
      id: 4,
      title: "Nhà phố Thảo Điền",
      image: "https://noithatgiakhanh.com/wp-content/uploads/2025/02/villa.jpg",
      category: "Nhà phố",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nhà đẹp cùng SLABSTONE</h2>
          <p className="text-gray-600">
            Khám phá những công trình tiêu biểu sử dụng đá SLABSTONE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautifulHomes;
