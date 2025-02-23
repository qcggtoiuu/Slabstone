import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import ProductDetail from "./ProductDetail";
import ProductionLine from "./ProductionLine";
import TechnologyShowcase from "./TechnologyShowcase";
import FactoryVideo from "./FactoryVideo";

interface HomeProps {
  initialSelectedProductId?: string;
}

const Home = ({ initialSelectedProductId = "" }: HomeProps) => {
  const [selectedProductId, setSelectedProductId] = useState(
    initialSelectedProductId,
  );

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
  };

  const handleCloseProductDetail = () => {
    setSelectedProductId("");
  };

  const handleExploreClick = () => {
    // Smooth scroll to product grid
    const productGrid = document.querySelector("#product-grid");
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection onExploreClick={handleExploreClick} />
      <ProductionLine />
      <FactoryVideo />
      <TechnologyShowcase />

      <div id="product-grid">
        <ProductGrid onProductClick={handleProductClick} />
      </div>

      <ProductDetail
        isOpen={!!selectedProductId}
        onClose={handleCloseProductDetail}
        product={selectedProductId ? undefined : undefined} // In a real app, you would fetch product details based on selectedProductId
      />
    </div>
  );
};

export default Home;
