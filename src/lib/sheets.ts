import Papa from "papaparse";
import { Product } from "@/types/product";

// Your published Google Sheet CSV URL
const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

import { cacheGet, cacheSet } from "./cache";

export async function fetchProducts(): Promise<Product[]> {
  const cached = cacheGet("products");
  if (cached) return cached;
  try {
    const response = await fetch(SHEET_URL, {
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvData = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvData, {
        header: true,
        complete: (results) => {
          const products = results.data.map((row: any) => ({
            name: row["Tên sản phẩm"] || "",
            slug: row["Slug"] || "",
            subtitle: row["Tiêu đề phụ"] || "",
            code: row["Mã sản phẩm"] || "",
            price: row["Giá sản phẩm"] || "",
            surface: row["Bề mặt"] || "",
            thickness: row["Độ dày"] || "",
            dimensions: row["Kích thước"] || "",
            finish: row["Hoàn thiện"] || "",
            color: row["Màu sắc"] || "",
            application: row["Ứng dụng"] || "",
            collection: row["Bộ sưu tập"] || "",
            catalogueUrl: row["Tải catalogue"] || "",
            description: row["Mô tả"] || "",
            images: {
              image1: row["Ảnh 1"] || "",
              image2: row["Ảnh 2"] || "",
              image3: row["Ảnh 3"] || "",
              image4: row["Ảnh 4"] || "",
              image5: row["Ảnh 5"] || "",
              image6: row["Ảnh 6"] || "",
              image7: row["Ảnh 7"] || "",
            },
          }));
          cacheSet("products", products);
          resolve(products);
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    const cached = cacheGet("products");
    if (cached) {
      console.log("Using cached data due to fetch error");
      return cached;
    }
    return [];
  }
}
