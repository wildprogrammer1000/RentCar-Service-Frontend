import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VehicleList from "./pages/VehicleList";
import VehicleDetail from "./pages/VehicleDetail";
import Inquiry from "./pages/Inquiry";
import Reviews from "./pages/Reviews";
import Promotions from "./pages/Promotions";
import TodayRecommendations from "./pages/TodayRecommendations";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-DEFAULT">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/:id" element={<VehicleDetail />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route
            path="/today-recommendations"
            element={<TodayRecommendations />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
