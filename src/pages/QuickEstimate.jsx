import { useNavigate } from "react-router-dom";
import VehicleSelector from "../components/VehicleSelector";

const QuickEstimate = () => {
  const navigate = useNavigate();

  const handleVehicleSelect = (vehicle) => {
    navigate(`/quick-estimate/${vehicle.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-section">
      <h1 className="text-3xl font-bold mb-8 text-center">간편 견적</h1>
      <div className="max-w-4xl mx-auto">
        <VehicleSelector onVehicleSelect={handleVehicleSelect} />
      </div>
    </div>
  );
};

export default QuickEstimate;
