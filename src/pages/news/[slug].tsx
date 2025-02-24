import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NewsDetailPage = () => {
  const { slug } = useParams();
  const [article, setArticle] = React.useState({
    title: "Xu hướng thiết kế nội thất với đá cao cấp 2024",
    description:
      "Khám phá những xu hướng mới nhất trong việc sử dụng đá cao cấp cho thiết kế nội thất năm 2024. Từ phong cách tối giản đến sang trọng.",
    date: "15/03/2024",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    content: "Lorem ipsum dolor sit amet...",
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${article.title} | Tin tức SLABSTONE`}
        description={article.description}
        type="article"
        image={article.image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: article.title,
          description: article.description,
          image: article.image,
          datePublished: article.date,
          publisher: {
            "@type": "Organization",
            name: "SLABSTONE",
            logo: {
              "@type": "ImageObject",
              url: "https://slabstone.vn/wp-content/uploads/2023/02/cropped-soc-do.png",
            },
          },
        }}
        content={`
          <article>
            <h1>${article.title}</h1>
            <time>${article.date}</time>
            <img src="${article.image}" alt="${article.title}" />
            <div>${article.content}</div>
          </article>
        `}
      />
      <Header />
      <main>
        <article
          className="pt-8 pb-16"
          itemScope
          itemType="https://schema.org/Article"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Tiêu đề bài viết</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <time>15/03/2024</time>
                <span>Tin tức</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
                alt="Ảnh bài viết"
                className="w-full rounded-lg mb-8"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
