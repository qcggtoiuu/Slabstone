import {
  PageContent,
  ProductContent,
  ArticleContent,
  ProjectContent,
} from "@/types/seo";

const SITE_NAME = "SLABSTONE";
const SITE_DESCRIPTION =
  "Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á";

export function generateSEO(content: PageContent) {
  const title = `${content.title} | ${SITE_NAME}`;
  const description =
    content.description || `${content.title}. ${SITE_DESCRIPTION}`;

  // Generate structured content for search engines
  const structuredContent = `
    <article>
      <h1>${content.title}</h1>
      ${content.subtitle ? `<p>${content.subtitle}</p>` : ""}
      <p>${content.description}</p>
      ${content.sections
        .map(
          (section) => `
        <section>
          <h2>${section.title}</h2>
          ${
            Array.isArray(section.content)
              ? `<ul>${section.content.map((item) => `<li>${item}</li>`).join("")}</ul>`
              : `<p>${section.content}</p>`
          }
        </section>
      `,
        )
        .join("")}
    </article>
  `;

  return {
    title,
    description,
    type: "website",
    image: content.image,
    content: structuredContent,
  };
}

export function generateProductSEO(content: ProductContent) {
  const seo = generateSEO(content);
  return {
    ...seo,
    type: "product",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: content.title,
      description: content.description,
      image: content.image,
      ...(content.price && {
        offers: {
          "@type": "Offer",
          price: content.price.replace(/[^0-9]/g, ""),
          priceCurrency: "VND",
        },
      }),
    },
  };
}

export function generateArticleSEO(content: ArticleContent) {
  const seo = generateSEO(content);
  return {
    ...seo,
    type: "article",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: content.title,
      description: content.description,
      image: content.image,
      datePublished: content.date,
      author: {
        "@type": "Person",
        name: content.author,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: "https://slabstone.vn/wp-content/uploads/2023/02/cropped-soc-do.png",
        },
      },
    },
  };
}

export function generateProjectSEO(content: ProjectContent) {
  const seo = generateSEO(content);
  return {
    ...seo,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Project",
      name: content.title,
      description: content.description,
      image: content.image,
      location: content.location,
      dateCompleted: content.completionDate,
    },
  };
}
