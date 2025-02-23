import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Info, Package, Paintbrush } from "lucide-react";
import { Product } from "@/types/product";

interface ProductDetailProps {
  isOpen?: boolean;
  onClose?: () => void;
  product?: Product;
}

const ProductDetail = ({
  isOpen = true,
  onClose = () => {},
  product,
}: ProductDetailProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const images = [
    product.images.image1,
    product.images.image2,
    product.images.image3,
    product.images.image4,
    product.images.image5,
    product.images.image6,
    product.images.image7,
  ].filter(Boolean);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto bg-white p-0">
        <div className="sticky top-0 z-10 bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <Badge variant="secondary" className="text-lg">
              {product.price}
            </Badge>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Info className="w-4 h-4" /> Tổng quan
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="flex items-center gap-2"
              >
                <Package className="w-4 h-4" /> Thông số
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2">
                <Paintbrush className="w-4 h-4" /> Ứng dụng
              </TabsTrigger>
            </TabsList>

            <div className="p-6">
              <TabsContent value="overview" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Main Image */}
                  <div className="lg:col-span-8">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={images[selectedImageIndex]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="lg:col-span-4">
                    <div className="grid grid-cols-2 gap-2">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`aspect-square rounded-lg overflow-hidden border-2 ${selectedImageIndex === index ? "border-primary" : "border-transparent"}`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} - ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Thông số kỹ thuật
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Kích thước</span>
                          <span className="font-medium">
                            {product.dimensions}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Độ dày</span>
                          <span className="font-medium">
                            {product.thickness}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Bề mặt</span>
                          <span className="font-medium">{product.surface}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Hoàn thiện</span>
                          <span className="font-medium">{product.finish}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Thông tin thêm
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Bộ sưu tập</span>
                          <span className="font-medium">
                            {product.collection}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Màu sắc</span>
                          <span className="font-medium">{product.color}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Ứng dụng</span>
                          <span className="font-medium">
                            {product.application}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Ứng dụng thiết kế</h3>
                  <p className="text-gray-600">{product.description}</p>
                  {product.catalogueUrl && (
                    <div className="mt-4">
                      <Button asChild>
                        <a
                          href={product.catalogueUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Tải catalogue
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
