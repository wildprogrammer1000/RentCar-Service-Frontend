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
      <div className="relative w-full flex items-center justify-center mb-8">
        <div className="flex items-center justify-center w-full max-w-[1920px]">
          <div className="aspect-square md:aspect-[4/3] lg:aspect-video overflow-hidden max-h-[80vh]">
            <div
              ref={slideRef}
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={`slide-${index}`}
                  className="flex flex-col justify-center gap-4 w-full flex-shrink-0 relative h-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="object-contain"
                  />
                  <div className="flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl font-bold text-secondary-DEFAULT mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-xl text-secondary-DEFAULT mb-8">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        </div>
      </div>

      {/* 메뉴바 */}
      <div className="bg-white">
        <div className="container mx-auto px-4 mb-8">
          {/* 모바일/태블릿 메뉴 */}
          <div className="lg:hidden">
            <div className="grid grid-cols-4 gap-2 py-4">
              <Link to="/inquiry" className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  📞
                </div>
                <span className="text-xs text-secondary-DEFAULT">견적상담</span>
              </Link>
              <Link
                to="/quick-estimate"
                className="flex flex-col items-center gap-1"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  💻
                </div>
                <span className="text-xs text-secondary-DEFAULT">
                  온라인 견적
                </span>
              </Link>
              <Link
                to="/today-recommendations"
                className="flex flex-col items-center gap-1"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  🚗
                </div>
                <span className="text-xs text-secondary-DEFAULT">
                  추천 차량
                </span>
              </Link>
              <Link to="/reviews" className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  ✍️
                </div>
                <span className="text-xs text-secondary-DEFAULT">
                  계약 후기
                </span>
              </Link>
            </div>
          </div>

          {/* PC 메뉴 */}
          <div className="hidden lg:block relative">
            <div className="bg-white rounded-lg shadow-lg py-6 px-8 -mt-4">
              <div className="flex items-center justify-center gap-12">
                <Link
                  to="/inquiry"
                  className="flex items-center gap-3 text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    📞
                  </span>
                  <span className="text-lg font-medium">견적상담</span>
                </Link>
                <Link
                  to="/quick-estimate"
                  className="flex items-center gap-3 text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    💻
                  </span>
                  <span className="text-lg font-medium">온라인 견적</span>
                </Link>
                <Link
                  to="/today-recommendations"
                  className="flex items-center gap-3 text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    🚗
                  </span>
                  <span className="text-lg font-medium">오늘의 추천 차량</span>
                </Link>
                <Link
                  to="/reviews"
                  className="flex items-center gap-3 text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    ✍️
                  </span>
                  <span className="text-lg font-medium">계약 후기</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 차량 선택 섹션 */}
      {/* <section className="py-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-secondary-DEFAULT">
            차량 선택
          </h2>
          <VehicleSelector onVehicleSelect={handleVehicleSelect} />
        </div>
      </section> */}

      {/* 문의 폼 */}
      <section className="py-section bg-background-card min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto lg:max-w-7xl">
            {/* 모바일/태블릿 타이틀 */}
            <div className="lg:hidden">
              <h2 className="text-2xl font-bold mb-2 text-secondary-DEFAULT">
                간편 견적 문의
              </h2>
              <p className="mb-6 text-secondary-DEFAULT">
                간편하게 상담 신청을 해보세요!
              </p>
            </div>

            <div className="lg:flex lg:items-start lg:gap-12">
              {/* PC 타이틀 */}
              <div className="hidden lg:block lg:flex-1">
                <h2 className="text-3xl font-bold mb-4 text-secondary-DEFAULT">
                  간편 견적 문의
                </h2>
                <p className="text-lg text-secondary-DEFAULT">
                  간편하게 상담 신청을 해보세요!
                </p>
              </div>

              {/* 폼 */}
              <div className="lg:flex-1">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-DEFAULT mb-1">
                      성함
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="성함을 입력해주세요"
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
                      placeholder="010-1234-5678"
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
                      placeholder="원하는 차종, 법인차량 문의 등"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT"
                    />
                  </div>
                  <div className="md:max-w-xs mx-auto lg:hidden">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 font-semibold text-lg"
                    >
                      문의하기
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* PC 버튼 */}
          <div className="hidden lg:flex lg:justify-center lg:mt-8">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-20 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 font-semibold text-lg"
            >
              문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
