import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import {
  Info,
  Package,
  Paintbrush,
  CalendarRange,
  Download,
  Maximize2,
  X,
} from "lucide-react";
import { Product } from "@/types/product";
import SampleRequestForm from "./SampleRequestForm";
import { motion } from "framer-motion";

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
  const [showZoom, setShowZoom] = useState(false);

  useEffect(() => {
    if (!product && isOpen) {
      // Add noindex meta tag for non-existent products
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex";
      document.head.appendChild(meta);

      return () => {
        document.head.removeChild(meta);
      };
    }
  }, [product, isOpen]);

  if (!product) return null;

  // Reorder images to show image2 first, then others, with image1 at the end
  const images = [
    product.images.image2,
    product.images.image3,
    product.images.image4,
    product.images.image5,
    product.images.image6,
    product.images.image7,
    product.images.image1,
  ].filter(Boolean);

  const handleSampleRequest = async (formData: any) => {
    try {
      // Here you would typically send the data to your backend
      const requestData = {
        ...formData,
        productCode: product.code,
        productName: product.name,
        timestamp: new Date().toISOString(),
      };

      // Log the request for now
      console.log("Sample request data:", requestData);

      // Show success message
      alert("Yêu cầu của bạn đã được gửi thành công!");

      // Close the dialog after success
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl h-[90vh] overflow-y-auto bg-white p-0">
          <div className="sticky top-0 z-10 bg-white border-b p-4">
            <DialogTitle className="text-2xl font-bold">
              {product.name}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {product.description}
            </DialogDescription>

            <div className="flex items-center justify-end mt-2">
              <Badge variant="secondary" className="text-lg">
                {product.price}
              </Badge>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="mt-4"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger
                  value="overview"
                  className="flex items-center gap-2"
                >
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
                <TabsTrigger
                  value="request"
                  className="flex items-center gap-2"
                >
                  <CalendarRange className="w-4 h-4" /> Đặt mẫu
                </TabsTrigger>
              </TabsList>

              <div className="p-6">
                <TabsContent value="overview" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Main Image Section */}
                    <motion.div
                      className="lg:col-span-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group">
                        <img
                          src={images[selectedImageIndex]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <button
                          onClick={() => setShowZoom(true)}
                          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
                        >
                          <Maximize2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Download Catalogue Button */}
                      {product.catalogueUrl && (
                        <motion.div
                          className="mt-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Button
                            className="w-full bg-primary hover:bg-primary/90 text-white"
                            size="lg"
                            asChild
                          >
                            <a
                              href={product.catalogueUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <Download className="w-5 h-5" />
                              Tải catalogue
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Thumbnails Grid */}
                    <motion.div
                      className="lg:col-span-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {images.map((image, index) => (
                          <motion.button
                            key={`${product.code}-thumb-${index}`}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`relative aspect-square rounded-lg overflow-hidden ${selectedImageIndex === index ? "ring-2 ring-primary ring-offset-2" : "hover:opacity-80"}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <img
                              src={image}
                              alt={`${product.name} - ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
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
                            <span className="font-medium">
                              {product.surface}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Hoàn thiện</span>
                            <span className="font-medium">
                              {product.finish}
                            </span>
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
                  </div>
                </TabsContent>

                <TabsContent value="request" className="mt-0">
                  <div className="flex justify-center">
                    <SampleRequestForm
                      productName={product.name}
                      onSubmit={handleSampleRequest}
                    />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>

      {/* Zoomed Image View */}
      {showZoom && (
        <Dialog open={showZoom} onOpenChange={() => setShowZoom(false)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => setShowZoom(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              {selectedImageIndex > 0 && (
                <button
                  onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {selectedImageIndex < images.length - 1 && (
                <button
                  onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>

              <img
                src={images[selectedImageIndex]}
                alt={product.name}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ProductDetail;
