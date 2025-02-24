import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeautifulHomes from "@/components/BeautifulHomes";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Dự án tiêu biểu</h1>
          <BeautifulHomes />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
