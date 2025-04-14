import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { vehicleTypes, brands } from "../data/vehicles";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
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

  const slides = [
    {
      id: 1,
      title: "최고의 차량과 서비스",
      description: "장기렌트카 서비스로 편안한 드라이빙을 경험하세요",
      image: "https://placehold.co/1920x800",
    },
    {
      id: 2,
      title: "합리적인 가격",
      description: "경쟁력 있는 가격으로 최상의 서비스를 제공합니다",
      image: "https://placehold.co/1920x800",
    },
    {
      id: 3,
      title: "다양한 차량 선택",
      description: "국산차부터 수입차까지 다양한 차량을 선택할 수 있습니다",
      image: "https://placehold.co/1920x800",
    },
    {
      id: 4,
      title: "전문 상담 서비스",
      description:
        "전문 상담원이 고객님의 요구사항을 듣고 맞춤형 서비스를 제공합니다",
      image: "https://placehold.co/1920x800",
    },
    {
      id: 5,
      title: "편리한 계약 절차",
      description: "간편한 온라인 신청과 빠른 계약 처리가 가능합니다",
      image: "https://placehold.co/1920x800",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log(formData);
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
      {/* 메인 슬라이드 */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          ref={slideRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 relative h-[600px]"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white mb-8">
                      {slide.description}
                    </p>
                    <Link
                      to="/inquiry"
                      className="inline-block bg-primary-DEFAULT text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
                    >
                      상담 신청하기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index
                  ? "bg-primary-DEFAULT"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Floating Navbar - 메인 슬라이더 내부로 이동 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-t-2xl shadow-lg">
          <div className="flex items-center gap-2 p-4">
            <Link
              to="/inquiry"
              className="px-4 py-2 rounded-full bg-primary-DEFAULT text-white hover:bg-primary-dark transition-colors"
            >
              오늘의 차 견적상담
            </Link>
            <Link
              to="/inquiry"
              className="px-4 py-2 rounded-full bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors"
            >
              온라인 견적
            </Link>
            <Link
              to="/today-recommendations"
              className="px-4 py-2 rounded-full bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors"
            >
              오늘의 추천차량
            </Link>
            <Link
              to="/reviews"
              className="px-4 py-2 rounded-full bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors"
            >
              계약 후기
            </Link>
          </div>
        </div>
      </div>

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
                          draggable={false}
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
                className="w-full bg-primary-DEFAULT text-white py-3 rounded-md hover:bg-primary-dark transition-colors shadow-lg shadow-primary-DEFAULT/30 font-bold"
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

export default Home;
