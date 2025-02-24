import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const BeautifulHomesPage = () => {
  const posts = [
    {
      id: 1,
      title: "Biệt thự hiện đại với không gian mở",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      excerpt: "Khám phá không gian sống đẳng cấp với đá cao cấp SLABSTONE...",
      date: "15/03/2024",
      slug: "biet-thu-hien-dai-voi-khong-gian-mo",
    },
    // Add more posts
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Nhà đẹp</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <h3 className="text-xl font-semibold mt-2 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                    <a
                      href={`/nha-dep/${post.slug}`}
                      className="inline-block mt-4 text-primary hover:underline"
                    >
                      Xem thêm
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeautifulHomesPage;
