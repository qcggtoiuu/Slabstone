import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/home";
import ShowroomPage from "./pages/showroom";
import FactoryPage from "./pages/factory";
import DistributorPage from "./pages/distributor";
import ProductsPage from "./pages/products";
import ProjectsPage from "./pages/projects";
import PricingPage from "./pages/pricing";
import NewsPage from "./pages/news";
import NewsDetailPage from "./pages/news/[slug]";
import BeautifulHomesPage from "./pages/beautiful-homes";
import BeautifulHomesDetailPage from "./pages/beautiful-homes/[slug]";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import ArchitectPage from "./pages/architect";
import routes from "tempo-routes";

import NotFoundPage from "./pages/404";

function App() {
  return (
    <HelmetProvider>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p>Loading...</p>
          </div>
        }
      >
        <div>
          {/* For the tempo routes */}
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showroom" element={<ShowroomPage />} />
            <Route path="/nha-may" element={<FactoryPage />} />
            <Route path="/nha-phan-phoi" element={<DistributorPage />} />
            <Route path="/san-pham" element={<ProductsPage />} />
            <Route path="/du-an" element={<ProjectsPage />} />
            <Route path="/bang-gia" element={<PricingPage />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
            <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} />
            <Route path="/nha-dep" element={<BeautifulHomesPage />} />
            <Route
              path="/nha-dep/:slug"
              element={<BeautifulHomesDetailPage />}
            />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route path="/kien-truc-su" element={<ArchitectPage />} />

            {/* Add this before the catchall route */}
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
