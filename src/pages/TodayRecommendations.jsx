import { useState } from "react";
import { Link } from "react-router-dom";
import { brands } from "../data/vehicles";

const TodayRecommendations = () => {
  const [selectedType, setSelectedType] = useState("domestic");

  // 오늘의 추천차량 데이터 (실제로는 API에서 가져올 수 있음)
  const recommendations = {
    domestic: [
      {
        id: 1,
        name: "현대 그랜저",
        brand: "hyundai",
        image: "https://placehold.co/300x200",
        price: "월 50만원",
        discount: "20% 할인",
        features: ["스마트키", "후방카메라", "네비게이션"],
      },
      {
        id: 2,
        name: "기아 K8",
        brand: "kia",
        image: "https://placehold.co/300x200",
        price: "월 45만원",
        discount: "15% 할인",
        features: ["스마트키", "후방카메라", "선루프"],
      },
    ],
    imported: [
      {
        id: 3,
        name: "벤츠 E클래스",
        brand: "benz",
        image: "https://placehold.co/300x200",
        price: "월 80만원",
        discount: "10% 할인",
        features: ["스마트키", "후방카메라", "네비게이션", "선루프"],
      },
      {
        id: 4,
        name: "BMW 5시리즈",
        brand: "bmw",
        image: "https://placehold.co/300x200",
        price: "월 75만원",
        discount: "12% 할인",
        features: ["스마트키", "후방카메라", "네비게이션", "선루프"],
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-secondary-DEFAULT">
        오늘의 추천차량
      </h1>

      {/* 차종 선택 */}
      <div className="mb-8">
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedType("domestic")}
            className={`px-6 py-3 rounded-md transition-all ${
              selectedType === "domestic"
                ? "bg-primary-DEFAULT text-white"
                : "bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT"
            }`}
          >
            국산차
          </button>
          <button
            onClick={() => setSelectedType("imported")}
            className={`px-6 py-3 rounded-md transition-all ${
              selectedType === "imported"
                ? "bg-primary-DEFAULT text-white"
                : "bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT"
            }`}
          >
            수입차
          </button>
        </div>
      </div>

      {/* 추천차량 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations[selectedType].map((car) => (
          <div
            key={car.id}
            className="bg-background-card rounded-card shadow-card p-6 hover:shadow-lg transition-shadow"
          >
            <div className="relative mb-4">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute top-2 right-2 bg-primary-DEFAULT text-white px-3 py-1 rounded-full text-sm">
                {car.discount}
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-secondary-DEFAULT">
              {car.name}
            </h2>
            <p className="text-lg font-semibold text-primary-DEFAULT mb-4">
              {car.price}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {car.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-background-DEFAULT text-secondary-DEFAULT px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
            <Link
              to={`/vehicles/${car.id}`}
              className="block w-full text-center bg-primary-DEFAULT text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              상세보기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayRecommendations;
