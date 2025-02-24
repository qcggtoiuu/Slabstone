import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const BeautifulHomesDetailPage = () => {
  const { slug } = useParams();
  const [project, setProject] = React.useState({
    title: "Biệt thự hiện đại The Manor với không gian mở",
    description:
      "Khám phá không gian sống đẳng cấp tại biệt thự The Manor với đá cao cấp SLABSTONE. Thiết kế hiện đại kết hợp với chất liệu cao cấp tạo nên không gian sống sang trọng.",
    date: "15/03/2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    content: "Lorem ipsum dolor sit amet...",
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${project.title} | Nhà đẹp SLABSTONE`}
        description={project.description}
        type="article"
        image={project.image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: project.title,
          description: project.description,
          image: project.image,
          datePublished: project.date,
          publisher: {
            "@type": "Organization",
            name: "SLABSTONE",
            logo: {
              "@type": "ImageObject",
              url: "https://slabstone.vn/wp-content/uploads/2023/02/cropped-soc-do.png",
            },
          },
          articleSection: "Nhà đẹp",
        }}
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
              <h1 className="text-4xl font-bold mb-4">
                Biệt thự hiện đại với không gian mở
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <time>15/03/2024</time>
                <span>Nhà đẹp</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
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

export default BeautifulHomesDetailPage;
