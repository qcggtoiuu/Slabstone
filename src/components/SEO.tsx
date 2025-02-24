import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { pageSEO } from "@/lib/seo";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: object;
  content?: React.ReactNode;
}

const SEO = ({
  title = "SLABSTONE - Nhà máy đá nung kết đầu tiên tại Việt Nam",
  description = "SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công nghệ tiên tiến từ SACMI Italia.",
  image = "https://slabstone.vn/wp-content/uploads/2023/02/cropped-soc-do.png",
  type = "website",
  noindex = false,
  structuredData,
  content,
}: SEOProps) => {
  const { pathname } = useLocation();
  const url = `https://slabstone.vn${pathname}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SLABSTONE",
    url: "https://slabstone.vn",
    logo: "https://slabstone.vn/wp-content/uploads/2023/02/cropped-soc-do.png",
    description:
      "Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công nghệ tiên tiến từ SACMI Italia.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nghi Văn",
      addressRegion: "Nghi Lộc",
      addressCountry: "Nghệ An",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-978-649-797",
      contactType: "customer service",
    },
  };

  return (
    <>
      <Helmet>
        <html lang="vi" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {noindex && <meta name="robots" content="noindex,nofollow" />}

        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="đá nung kết, đá cao cấp, slabstone, đá nhân tạo, đá ốp lát, đá trang trí, đá nội thất"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData || defaultStructuredData)}
        </script>
      </Helmet>
      <div
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{ __html: content as string }}
      />
    </>
  );
};

export default SEO;
