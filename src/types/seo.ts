export interface SEOProps {
  title?: string;
  description?: string;
  type?: "website" | "article" | "product";
  image?: string;
  noindex?: boolean;
  structuredData?: object;
  content?: React.ReactNode;
}

export interface PageContent {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
  metadata?: {
    author?: string;
    date?: string;
    category?: string;
    tags?: string[];
  };
}

export interface ProductContent extends PageContent {
  type: "product";
  price?: string;
  specifications?: Record<string, string>;
  features?: string[];
}

export interface ArticleContent extends PageContent {
  type: "article";
  author: string;
  date: string;
  category: string;
}

export interface ProjectContent extends PageContent {
  type: "project";
  location?: string;
  completionDate?: string;
  category: string;
}
