import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VehicleSelector from "../components/VehicleSelector";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    content: "",
  });

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
    //console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVehicleSelect = (vehicle) => {
    // 선택된 차량으로 문의 페이지로 이동
    window.location.href = `/quick-estimate/${vehicle.id}`;
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
          {slides.map((slide, index) => (
            <div
              key={`slide-${index}`}
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
                    <h1 className="text-4xl sm:text-5xl font-bold text-secondary-DEFAULT mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-secondary-DEFAULT mb-8">
                      {slide.description}
                    </p>
                    <Link
                      to="/inquiry"
                      className="inline-block bg-primary-DEFAULT text-secondary-DEFAULT px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
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
              key={`dot-${index}`}
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
            <button
              onClick={() => scrollTo(0, 0)}
              className="px-4 py-2 rounded-full bg-primary-DEFAULT text-secondary-DEFAULT hover:bg-primary-dark transition-colors"
            >
              견적상담
            </button>
            <Link
              to="/quick-estimate"
              className="px-4 py-2 rounded-full bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors"
            >
              온라인 견적
            </Link>
            <Link
              to="/today-recommendations"
              className="px-4 py-2 rounded-full bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors"
            >
              오늘의 추천 차량
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
          <h2 className="text-2xl font-bold mb-8 text-center text-secondary-DEFAULT">
            차량 선택
          </h2>
          <VehicleSelector onVehicleSelect={handleVehicleSelect} />
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
                문의하기
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
