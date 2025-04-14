import { useState, useRef } from "react";
import { vehicleTypes, brands } from "../data/vehicles";

const Inquiry = () => {
  const [selectedType, setSelectedType] = useState("domestic");
  const [selectedBrand, setSelectedBrand] = useState("hyundai");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    content: "",
  });

  const brandScrollRef = useRef(null);
  const vehicleScrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직
    //console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    // 브랜드도 해당 타입의 첫 번째 브랜드로 설정
    setSelectedBrand(brands[type][0].id);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleMouseDown = (e, ref) => {
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseMove = (e, ref) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full">
      {/* 차량 선택 섹션 */}
      <section className="py-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 차종 선택 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-secondary-DEFAULT">
              차종 선택
            </h2>
            <div className="flex gap-4">
              {vehicleTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  className={`px-6 py-3 rounded-md transition-all ${
                    selectedType === type.id
                      ? "bg-background-card text-selected-DEFAULT border-2 border-selected-border shadow-lg shadow-selected-light/20 font-bold"
                      : "bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {/* 브랜드 선택 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-secondary-DEFAULT">
              브랜드 선택
            </h2>
            <div className="relative">
              <div
                ref={brandScrollRef}
                className="overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
                onMouseDown={(e) => handleMouseDown(e, brandScrollRef)}
                onMouseMove={(e) => handleMouseMove(e, brandScrollRef)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex gap-4 min-w-max">
                  {brands[selectedType].map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => handleBrandSelect(brand.id)}
                      className={`p-4 rounded-card transition-all ${
                        selectedBrand === brand.id
                          ? "bg-background-card text-selected-DEFAULT border-2 border-selected-border shadow-lg shadow-selected-light/20 font-bold"
                          : "bg-background-card text-secondary-DEFAULT hover:scale-[1.02] hover:shadow-card"
                      }`}
                    >
                      <h3 className="text-lg font-semibold">{brand.name}</h3>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 차량 선택 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-secondary-DEFAULT">
              차량 선택
            </h2>
            <div className="relative">
              <div
                ref={vehicleScrollRef}
                className="overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
                onMouseDown={(e) => handleMouseDown(e, vehicleScrollRef)}
                onMouseMove={(e) => handleMouseMove(e, vehicleScrollRef)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex gap-6 min-w-max">
                  {brands[selectedType]
                    .find((brand) => brand.id === selectedBrand)
                    .vehicles.map((vehicle) => (
                      <div
                        key={vehicle.id}
                        className="w-64 flex-shrink-0 p-4 rounded-card shadow-card bg-background-card hover:scale-[1.02] transition-all"
                      >
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-40 object-cover rounded mb-4"
                        />
                        <h3 className="text-lg font-semibold text-secondary-DEFAULT">
                          {vehicle.name}
                        </h3>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 폼 */}
      <section className="py-section bg-background-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-secondary-DEFAULT">
              상담 신청하기
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-DEFAULT mb-1">
                  성함
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-DEFAULT mb-1">
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-DEFAULT mb-1">
                  상담내용
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-DEFAULT text-secondary-DEFAULT py-3 rounded-md hover:bg-primary-dark transition-colors shadow-lg shadow-primary-DEFAULT/30 font-bold"
              >
                신청하기
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inquiry; 