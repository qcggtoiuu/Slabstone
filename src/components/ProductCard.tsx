import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Eye, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id?: string;
  name?: string;
  image?: string;
  price?: string;
  category?: string;
  description?: string;
  onClick?: () => void;
}

const ProductCard = ({
  id = "1",
  name = "Đá cao cấp",
  image = "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800&auto=format&fit=crop&q=60",
  price = "2.990.000đ/m²",
  category = "Đá marble",
  description = "Đá marble trắng với vân xám tinh tế, hoàn hảo cho nội thất cao cấp.",
  onClick = () => {},
}: ProductCardProps) => {
  return (
    <Card className="w-[280px] h-[560px] bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative h-[400px] overflow-hidden">
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
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{description}</p>
        <p className="text-lg font-bold text-gray-900">{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={onClick}
        >
          <Eye className="w-4 h-4 mr-2" />
          Xem chi tiết
        </Button>
        <Button size="sm" className="flex-1">
          <ShoppingBag className="w-4 h-4 mr-2" />
          Đặt mẫu
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
