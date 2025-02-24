import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

interface ProductCardProps {
  id?: string;
  name?: string;
  image?: string;
  price?: string;
  category?: string;
  description?: string;
  surface?: string;
  thickness?: string;
  dimensions?: string;
  onClick?: () => void;
}

const ProductCard = ({
  id = "1",
  name = "Đá cao cấp",
  image = "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800&auto=format&fit=crop&q=60",
  price = "2.990.000đ/m²",
  category = "Đá marble",
  description = "Đá marble trắng với vân xám tinh tế, hoàn hảo cho nội thất cao cấp.",
  surface = "",
  thickness = "",
  dimensions = "",
  onClick = () => {},
}: ProductCardProps) => {
  return (
    <Card className="w-full max-w-[280px] bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-[1/2] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <Badge className="absolute top-4 right-4 bg-white/80 text-black hover:bg-white/90">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-1">
        <div className="h-full flex flex-col">
          <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-1">
            {name}
          </h3>
          <div className="flex-1">
            {surface && (
              <p className="text-sm text-gray-600 mb-1">Bề mặt: {surface}</p>
            )}
            {thickness && (
              <p className="text-sm text-gray-600 mb-1">Độ dày: {thickness}</p>
            )}
            {dimensions && (
              <p className="text-sm text-gray-600 mb-2">
                Kích thước: {dimensions}
              </p>
            )}
          </div>
          {price && (
            <p className="text-lg font-bold text-gray-900 mt-auto">{price}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          variant="default"
          size="lg"
          className="w-full bg-[#0f172a] hover:bg-[#0f172a]/90"
          onClick={onClick}
        >
          <Eye className="w-4 h-4 mr-2" />
          Xem chi tiết
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
