import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const VehicleList = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "현대 그랜저",
      manufacturer: "현대",
      price: 350000,
      image: "https://placehold.co/300x200",
    },
    {
      id: 2,
      name: "기아 K8",
      manufacturer: "기아",
      price: 400000,
      image: "https://placehold.co/300x200",
    },
    {
      id: 3,
      name: "제네시스 G80",
      manufacturer: "제네시스",
      price: 500000,
      image: "https://placehold.co/300x200",
    },
  ]);

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-section">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-secondary-DEFAULT">
        {searchTerm ? `"${searchTerm}" 검색 결과` : "차량 목록"}
      </h1>

      {/* 차량 목록 섹션 */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-background-card rounded-card shadow-card overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-w-16 aspect-h-9 bg-background-DEFAULT">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-card">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-secondary-DEFAULT">
                  {vehicle.name}
                </h3>
                <p className="text-secondary-light mb-2 text-sm sm:text-base">
                  {vehicle.manufacturer}
                </p>
                <p className="text-primary-DEFAULT font-bold mb-4 text-base sm:text-lg">
                  월 {vehicle.price.toLocaleString()}원
                </p>
                <Link
                  to={`/vehicles/${vehicle.id}`}
                  className="block w-full bg-primary-DEFAULT text-white text-center py-2 rounded-md hover:bg-primary-dark transition-colors text-sm sm:text-base"
                >
                  상세보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VehicleList;
