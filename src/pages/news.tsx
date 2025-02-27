import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import SEO from "@/components/SEO";
import { generateArticleSEO } from "@/lib/seo";

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        {...generateArticleSEO({
          type: "article",
          title: "Tin tức & Sự kiện",
          description:
            "Cập nhật tin tức mới nhất về công nghệ sản xuất đá nung kết, xu hướng thiết kế và dự án tiêu biểu từ SLABSTONE.",
          author: "SLABSTONE",
          date: new Date().toISOString(),
          category: "Tin tức",
          sections: [
            {
              title: "Tin tức mới nhất",
              content: [
                "Xu hướng thiết kế nội thất với đá cao cấp 2024",
                "SLABSTONE ra mắt bộ sưu tập mới",
                "Dự án tiêu biểu tháng 3/2024",
              ],
            },
          ],
        })}
      />
      <Header />
      <main>
        <article className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Tin tức & Sự kiện</h1>
            <div className="prose max-w-none mb-8">
              <p>
                Cập nhật tin tức mới nhất về công nghệ sản xuất đá nung kết, xu
                hướng thiết kế và dự án tiêu biểu từ SLABSTONE.
              </p>
            </div>
            <NewsSection />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
