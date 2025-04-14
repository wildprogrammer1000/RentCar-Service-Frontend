import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import VehicleList from "../pages/VehicleList";
import VehicleDetail from "../pages/VehicleDetail";
import Inquiry from "../pages/Inquiry";
import Reviews from "../pages/Reviews";
import Promotions from "../pages/Promotions";
import NotFound from "../pages/NotFound";
import SameDay from "../pages/SameDay";
import QuickEstimate from "../pages/QuickEstimate";
import QuickEstimateDetail from "../pages/QuickEstimateDetail";
import TodayRecommendations from "../pages/TodayRecommendations";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/:id" element={<VehicleDetail />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/same-day" element={<SameDay />} />
          <Route path="/quick-estimate" element={<QuickEstimate />} />
          <Route
            path="/quick-estimate/:vehicleId"
            element={<QuickEstimateDetail />}
          />
          <Route
            path="/today-recommendations"
            element={<TodayRecommendations />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
