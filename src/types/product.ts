export interface Product {
  name: string; // Tên sản phẩm
  slug: string; // Slug
  subtitle: string; // Tiêu đề phụ
  code: string; // Mã sản phẩm
  price: string; // Giá sản phẩm
  surface: string; // Bề mặt
  thickness: string; // Độ dày
  dimensions: string; // Kích thước
  finish: string; // Hoàn thiện
  color: string; // Màu sắc
  application: string; // Ứng dụng
  collection: string; // Bộ sưu tập
  catalogueUrl: string; // Tải catalogue
  description: string; // Mô tả
  images: {
    image1: string; // Ảnh 1
    image2: string; // Ảnh 2
    image3: string; // Ảnh 3
    image4: string; // Ảnh 4
    image5: string; // Ảnh 5
    image6: string; // Ảnh 6
    image7: string; // Ảnh 7
  };
}

export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

export const defaultColorOptions: FilterOption[] = [
  { id: "1", label: "Trắng", value: "white" },
  { id: "2", label: "Đen", value: "black" },
  { id: "3", label: "Be", value: "beige" },
  { id: "4", label: "Xám", value: "gray" },
  { id: "5", label: "Nâu", value: "brown" },
];

export const defaultPatternOptions: FilterOption[] = [
  { id: "1", label: "Vân đá", value: "marble" },
  { id: "2", label: "Vân gỗ", value: "wood" },
  { id: "3", label: "Đồng nhất", value: "solid" },
];

export const defaultApplicationOptions: FilterOption[] = [
  { id: "1", label: "Sàn", value: "floor" },
  { id: "2", label: "Tường", value: "wall" },
  { id: "3", label: "Mặt bàn", value: "countertop" },
  { id: "4", label: "Mặt tiền", value: "facade" },
];
