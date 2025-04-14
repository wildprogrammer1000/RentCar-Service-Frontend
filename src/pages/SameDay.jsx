import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VehicleSelector from "../components/VehicleSelector";

const SameDay = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    // TODO: API 연동
    const fetchVehicles = async () => {
      try {
        // 임시 데이터
        const mockVehicles = [
          {
            id: 1,
            brand: "현대",
            model: "그랜저",
            type: "세단",
            price: 50.0,
            image_url: "https://placehold.co/300x200",
            category: "중형",
            is_domestic: true,
            available: true,
          },
          {
            id: 2,
            brand: "기아",
            model: "K5",
            type: "세단",
            price: 35.0,
            image_url: "https://placehold.co/300x200",
            category: "중형",
            is_domestic: true,
            available: true,
          },
          {
            id: 3,
            brand: "BMW",
            model: "3시리즈",
            type: "세단",
            price: 60.0,
            image_url: "https://placehold.co/300x200",
            category: "중형",
            is_domestic: false,
            available: true,
          },
        ];
        setVehicles(mockVehicles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
    // 선택된 차량에 따른 추가 로직
    if (vehicle.available) {
      // 당일출고 가능 차량 선택 시
      //console.log("당일출고 가능 차량 선택:", vehicle);
    } else {
      // 당일출고 불가능 차량 선택 시
      //console.log("당일출고 불가능 차량 선택:", vehicle);
    }
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (selectedType === "all") return true;
    if (selectedType === "domestic") return vehicle.is_domestic;
    if (selectedType === "imported") return !vehicle.is_domestic;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-secondary-DEFAULT">
        당일출고 가능 차량
      </h1>

      {/* 차량 선택기 */}
      <div className="mb-8">
        <VehicleSelector onVehicleSelect={handleVehicleSelect} />
      </div>

      {/* 선택된 차량 정보 */}
      {selectedVehicle && (
        <div className="mb-8 p-6 bg-background-card rounded-card shadow-card">
          <h2 className="text-xl font-bold mb-4 text-secondary-DEFAULT">
            선택된 차량
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-secondary-DEFAULT">
                <span className="font-semibold">브랜드:</span> {selectedVehicle.brand}
              </p>
              <p className="text-secondary-DEFAULT">
                <span className="font-semibold">모델:</span> {selectedVehicle.model}
              </p>
              <p className="text-secondary-DEFAULT">
                <span className="font-semibold">타입:</span> {selectedVehicle.type}
              </p>
            </div>
            <div>
              <p className="text-secondary-DEFAULT">
                <span className="font-semibold">가격:</span> {selectedVehicle.price.toLocaleString()}만원/월
              </p>
              <p className="text-secondary-DEFAULT">
                <span className="font-semibold">카테고리:</span> {selectedVehicle.category}
              </p>
              <p className="text-secondary-DEFAULT">
                <span className="font-semibold">당일출고:</span>{" "}
                {selectedVehicle.available ? (
                  <span className="text-green-500">가능</span>
                ) : (
                  <span className="text-red-500">불가능</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 차량 목록 */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-DEFAULT"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-background-card rounded-card shadow-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="relative mb-4">
                <img
                  src={vehicle.image_url}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-48 object-cover rounded-md"
                />
                {vehicle.available && (
                  <div className="absolute top-2 right-2 bg-green-500 text-secondary-DEFAULT px-3 py-1 rounded-full text-sm">
                    당일출고 가능
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold mb-2 text-secondary-DEFAULT">
                {vehicle.brand} {vehicle.model}
              </h2>
              <p className="text-lg font-semibold text-primary-DEFAULT mb-4">
                {vehicle.price.toLocaleString()}만원/월
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-background-DEFAULT text-secondary-DEFAULT px-3 py-1 rounded-full text-sm">
                  {vehicle.type}
                </span>
                <span className="bg-background-DEFAULT text-secondary-DEFAULT px-3 py-1 rounded-full text-sm">
                  {vehicle.category}
                </span>
              </div>
              <Link
                to={`/vehicles/${vehicle.id}`}
                className="block w-full text-center bg-primary-DEFAULT text-secondary-DEFAULT py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                상세보기
              </Link>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredVehicles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary-DEFAULT text-lg">
            선택한 조건에 맞는 당일출고 가능 차량이 없습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default SameDay;
