import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ShowroomPage from "./pages/showroom";
import FactoryPage from "./pages/factory";
import DistributorPage from "./pages/distributor";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/factory" element={<FactoryPage />} />
          <Route path="/distributor" element={<DistributorPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
