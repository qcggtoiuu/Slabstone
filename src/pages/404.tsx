import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFoundPage = () => {
  useEffect(() => {
    // Add noindex meta tag for 404 pages
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        {...generateSEO({
          title: "Không tìm thấy trang",
          description: "Trang bạn đang tìm kiếm không tồn tại",
          sections: [
            {
              title: "Lỗi 404",
              content:
                "Trang bạn yêu cầu không tồn tại hoặc đã được di chuyển.",
            },
          ],
          noindex: true,
        })}
      />
      <Header />
      <div className="pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Không tìm thấy trang bạn yêu cầu
          </p>
          <a href="/" className="text-primary hover:underline">
            Về trang chủ
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
