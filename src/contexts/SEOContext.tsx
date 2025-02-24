import React, { createContext, useContext, ReactNode } from "react";
import { Helmet } from "react-helmet";

interface SEOContextType {
  updateMeta: (meta: SEOMetaType) => void;
}

export interface SEOMetaType {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

const defaultMeta = {
  title: "SLABSTONE - Nhà máy đá nung kết đầu tiên tại Việt Nam",
  description:
    "SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công nghệ tiên tiến từ SACMI Italia.",
  image: "https://slabstone.vn/wp-content/uploads/2023/02/cropped-soc-do.png",
  type: "website",
  url: "https://slabstone.vn",
};

export const SEOProvider = ({ children }: { children: ReactNode }) => {
  const [meta, setMeta] = React.useState<SEOMetaType>(defaultMeta);

  const updateMeta = (newMeta: SEOMetaType) => {
    setMeta({ ...defaultMeta, ...newMeta });
  };

  return (
    <SEOContext.Provider value={{ updateMeta }}>
      <Helmet>
        <html lang="vi" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {/* Canonical URL */}
        <link rel="canonical" href={meta.url} />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="đá nung kết, đá cao cấp, slabstone, đá nhân tạo, đá ốp lát, đá trang trí, đá nội thất"
        />
      </Helmet>
      {children}
    </SEOContext.Provider>
  );
};

export const useSEO = () => {
  const context = useContext(SEOContext);
  if (context === undefined) {
    throw new Error("useSEO must be used within a SEOProvider");
  }
  return context;
};
