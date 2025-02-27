import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SEO from "@/components/SEO";
import { generateSEO } from "@/lib/seo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PricingPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleRequestQuote = (category: string) => {
    setSelectedCategory(category);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    alert("Yêu cầu báo giá đã được gửi thành công!");
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        {...generateSEO({
          title: "Bảng giá sản phẩm",
          description:
            "Bảng giá chi tiết các sản phẩm đá cao cấp SLABSTONE. Liên hệ ngay để nhận báo giá tốt nhất và tư vấn miễn phí về sản phẩm.",
          sections: [
            {
              title: "Danh mục sản phẩm",
              content: [
                "Đá cao cấp",
                "Đá thạch anh",
                "Đá marble",
                "Đá granite",
                "Đá tự nhiên",
                "Đá nhân tạo",
              ],
            },
            {
              title: "Chính sách giá",
              content:
                "Liên hệ trực tiếp để nhận báo giá chi tiết và tư vấn miễn phí về sản phẩm",
            },
          ],
          structuredData: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bảng giá sản phẩm SLABSTONE",
            description: "Thông tin về giá các sản phẩm đá cao cấp SLABSTONE",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "VND",
              seller: {
                "@type": "Organization",
                name: "SLABSTONE",
              },
            },
          },
        })}
      />
      <Header />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Bảng giá sản phẩm</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để nhận báo giá chi tiết và tư vấn về sản
              phẩm
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              className="gap-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
                  "_blank",
                )
              }
            >
              <Download className="w-5 h-5" />
              Tải catalogue
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Đá cao cấp",
              "Đá thạch anh",
              "Đá marble",
              "Đá granite",
              "Đá tự nhiên",
              "Đá nhân tạo",
            ].map((category) => (
              <div
                key={category}
                className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <p className="text-gray-600 mb-4">
                  Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleRequestQuote(category)}
                >
                  Yêu cầu báo giá
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Yêu cầu báo giá {selectedCategory}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input id="name" placeholder="Nhập họ và tên của bạn" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Nhập số điện thoại của bạn"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Nhập email của bạn" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Yêu cầu thêm</Label>
              <Textarea
                id="message"
                placeholder="Nhập yêu cầu cụ thể hoặc câu hỏi của bạn"
                className="min-h-[100px]"
              />
            </div>
            <div className="pt-4 flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Hủy
              </Button>
              <Button type="submit">Gửi yêu cầu</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PricingPage;
