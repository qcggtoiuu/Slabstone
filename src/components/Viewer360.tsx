import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";

interface Viewer360Props {
  images?: string[];
  initialRotation?: number;
}

const Viewer360 = ({
  images = [
    "https://images.unsplash.com/photo-1588477000993-460d2257f88a?w=800",
    "https://images.unsplash.com/photo-1588477000993-460d2257f88a?w=800&rotation=90",
    "https://images.unsplash.com/photo-1588477000993-460d2257f88a?w=800&rotation=180",
    "https://images.unsplash.com/photo-1588477000993-460d2257f88a?w=800&rotation=270",
  ],
  initialRotation = 0,
}: Viewer360Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rotation, setRotation] = useState(initialRotation);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const rotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <Card className="w-full max-w-[600px] h-[600px] bg-white p-4 relative">
      <div className="relative w-full h-full">
        <img
          src={images[currentImageIndex]}
          alt={`View ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: `rotate(${rotation}deg)` }}
        />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={previousImage}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            onClick={rotate}
            className="rounded-full"
          >
            <RotateCw className="h-4 w-4" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            onClick={nextImage}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Viewer360;
