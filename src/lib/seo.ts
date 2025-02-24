export interface PageSEO {
  title: string;
  description: string;
  type?: string;
  image?: string;
  structuredData?: object;
  content?: string;
}

export const pageSEO: Record<string, PageSEO> = {
  news: {
    title: "Tin tức & Sự kiện | SLABSTONE",
    description:
      "Cập nhật tin tức mới nhất về công nghệ sản xuất đá nung kết, xu hướng thiết kế và dự án tiêu biểu từ SLABSTONE.",
    type: "website",
    content: `
      <article>
        <h1>Tin tức & Sự kiện SLABSTONE</h1>
        <p>Cập nhật tin tức mới nhất về công nghệ sản xuất đá nung kết, xu hướng thiết kế và dự án tiêu biểu từ SLABSTONE.</p>
        <section>
          <h2>Tin tức mới nhất</h2>
          <ul>
            <li>Xu hướng thiết kế nội thất với đá cao cấp 2024</li>
            <li>SLABSTONE ra mắt bộ sưu tập mới</li>
            <li>Dự án tiêu biểu tháng 3/2024</li>
          </ul>
        </section>
      </article>
    `,
  },
  about: {
    title: "Về chúng tôi | SLABSTONE",
    description:
      "SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á. Tìm hiểu về tầm nhìn, sứ mệnh và công nghệ sản xuất tiên tiến của chúng tôi.",
    type: "website",
    content: `
      <article>
        <h1>Về SLABSTONE</h1>
        <p>SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á.</p>
        <section>
          <h2>Tầm nhìn</h2>
          <p>Trở thành nhà sản xuất đá nung kết hàng đầu Đông Nam Á.</p>
        </section>
        <section>
          <h2>Sứ mệnh</h2>
          <p>Kiến tạo không gian sống đẳng cấp thông qua việc cung cấp các sản phẩm đá nung kết chất lượng cao.</p>
        </section>
      </article>
    `,
  },
  projects: {
    title: "Dự án tiêu biểu | SLABSTONE",
    description:
      "Khám phá các dự án tiêu biểu sử dụng đá cao cấp SLABSTONE. Từ biệt thự sang trọng đến các công trình thương mại đẳng cấp.",
    type: "website",
    content: `
      <article>
        <h1>Dự án tiêu biểu SLABSTONE</h1>
        <p>Khám phá các dự án đã hoàn thiện với đá cao cấp SLABSTONE.</p>
        <section>
          <h2>Danh mục dự án</h2>
          <ul>
            <li>Biệt thự</li>
            <li>Khách sạn</li>
            <li>Trung tâm thương mại</li>
          </ul>
        </section>
      </article>
    `,
  },
  home: {
    title: "SLABSTONE - Nhà máy đá nung kết đầu tiên tại Việt Nam",
    description:
      "SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công nghệ tiên tiến từ SACMI Italia. Khám phá bộ sưu tập đá cao cấp với đa dạng màu sắc và họa tiết.",
    type: "website",
    image: "https://slabstone.vn/wp-content/uploads/2023/02/cropped-soc-do.png",
    content: `
      <article>
        <h1>SLABSTONE - Nhà máy đá nung kết đầu tiên tại Việt Nam</h1>
        <p>SLABSTONE - Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công nghệ tiên tiến từ SACMI Italia.</p>
        <section>
          <h2>Công nghệ sản xuất</h2>
          <p>Sử dụng công nghệ tiên tiến từ SACMI Italia, SLABSTONE tự hào là nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á.</p>
        </section>
        <section>
          <h2>Sản phẩm nổi bật</h2>
          <ul>
            <li>Đá nung kết cao cấp</li>
            <li>Đá trang trí nội thất</li>
            <li>Đá ốp lát cao cấp</li>
          </ul>
        </section>
      </article>
    `,
  },
  products: {
    title: "Bộ sưu tập đá cao cấp | SLABSTONE",
    description:
      "Khám phá bộ sưu tập đá cao cấp SLABSTONE với đa dạng màu sắc, họa tiết và ứng dụng. Sản phẩm chất lượng cao với công nghệ tiên tiến từ SACMI Italia.",
    type: "website",
    content: `
      <article>
        <h1>Bộ sưu tập đá cao cấp SLABSTONE</h1>
        <p>Khám phá bộ sưu tập đá cao cấp SLABSTONE với đa dạng màu sắc, họa tiết và ứng dụng.</p>
        <section>
          <h2>Dòng sản phẩm</h2>
          <ul>
            <li>Đá nung kết cao cấp</li>
            <li>Đá trang trí nội thất</li>
            <li>Đá ốp lát cao cấp</li>
          </ul>
        </section>
      </article>
    `,
  },
  factory: {
    title: "Nhà máy SLABSTONE | Công nghệ sản xuất đá nung kết hiện đại",
    description:
      "Khám phá nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á của SLABSTONE, được trang bị công nghệ tiên tiến từ SACMI Italia.",
    type: "website",
    content: `
      <article>
        <h1>Nhà máy SLABSTONE - Công nghệ sản xuất đá nung kết hiện đại</h1>
        <p>Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, được trang bị công nghệ tiên tiến từ SACMI Italia.</p>
        <section>
          <h2>Công nghệ sản xuất</h2>
          <p>Sử dụng dây chuyền sản xuất hiện đại từ SACMI Italia, đảm bảo chất lượng sản phẩm cao cấp.</p>
        </section>
      </article>
    `,
  },
  contact: {
    title: "Liên hệ với SLABSTONE | Tư vấn & Báo giá",
    description:
      "Liên hệ với SLABSTONE để được tư vấn về sản phẩm đá cao cấp và nhận báo giá chi tiết. Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn.",
    type: "website",
    content: `
      <article>
        <h1>Liên hệ SLABSTONE</h1>
        <p>Liên hệ với chúng tôi để được tư vấn về sản phẩm đá cao cấp và nhận báo giá chi tiết.</p>
        <section>
          <h2>Thông tin liên hệ</h2>
          <ul>
            <li>Địa chỉ: Nghi Văn, Nghi Lộc, Nghệ An</li>
            <li>Hotline: 0978649797</li>
            <li>Email: hello@slabstone.com.vn</li>
          </ul>
        </section>
      </article>
    `,
  },
  showroom: {
    title: "Hệ thống Showroom | SLABSTONE",
    description:
      "Ghé thăm showroom SLABSTONE để trải nghiệm trực tiếp các sản phẩm đá cao cấp và nhận tư vấn từ đội ngũ chuyên viên của chúng tôi.",
    type: "website",
    content: `
      <article>
        <h1>Hệ thống Showroom SLABSTONE</h1>
        <p>Ghé thăm showroom của chúng tôi để trải nghiệm trực tiếp các sản phẩm đá cao cấp.</p>
        <section>
          <h2>Showroom Hà Nội</h2>
          <p>Tầng 2, toà nhà N03-T6, Đoàn Ngoại Giao, Phường Xuân Tảo, Quận Bắc Từ Liêm</p>
        </section>
      </article>
    `,
  },
  distributor: {
    title: "Chính sách nhà phân phối | SLABSTONE",
    description:
      "Trở thành đối tác của SLABSTONE và cùng nhau phát triển trong lĩnh vực đá cao cấp. Tìm hiểu về quyền lợi và điều kiện trở thành nhà phân phối.",
    type: "website",
    content: `
      <article>
        <h1>Chính sách nhà phân phối SLABSTONE</h1>
        <p>Trở thành đối tác của SLABSTONE và cùng nhau phát triển trong lĩnh vực đá cao cấp.</p>
        <section>
          <h2>Quyền lợi đối tác</h2>
          <ul>
            <li>Chính sách chiết khấu hấp dẫn</li>
            <li>Hỗ trợ marketing và trưng bày sản phẩm</li>
            <li>Đào tạo sản phẩm chuyên sâu</li>
          </ul>
        </section>
      </article>
    `,
  },
};
