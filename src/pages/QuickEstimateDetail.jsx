import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { vehicleService } from "../services/api";

const QuickEstimateDetail = () => {
  const { vehicleId } = useParams();

  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [estimate, setEstimate] = useState({
    months: 12,
    downPayment: 0,
    insurance: "basic",
  });

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        setLoading(true);
        const response = await vehicleService.getVehicleById(vehicleId);
        setVehicle(response);
      } catch (err) {
        setError("차량 정보를 불러오는데 실패했습니다.");
        console.error("Error fetching vehicle details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, [vehicleId]);

  const calculateTotalCost = () => {
    if (!vehicle) return 0;
    const monthlyCost = vehicle.price;
    const insuranceCost = estimate.insurance === "premium" ? 50000 : 30000;
    return (
      (monthlyCost + insuranceCost) * estimate.months - estimate.downPayment
    );
  };

  const handleEstimateChange = (e) => {
    const { name, value } = e.target;
    setEstimate((prev) => ({
      ...prev,
      [name]:
        name === "months" || name === "downPayment" ? Number(value) : value,
    }));
  };

  if (loading) return <div className="text-center py-8">로딩 중...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!vehicle)
    return <div className="text-center py-8">차량을 찾을 수 없습니다.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* 차량 정보 */}
        <div className="bg-background-card rounded-card shadow-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={vehicle.image_url}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-4 text-secondary-DEFAULT">
                {vehicle.brand} {vehicle.model}
              </h1>
              <div className="space-y-2 text-secondary-DEFAULT">
                <p>
                  <span className="font-semibold">차종:</span> {vehicle.type}
                </p>
                <p>
                  <span className="font-semibold">카테고리:</span>{" "}
                  {vehicle.category}
                </p>
                <p>
                  <span className="font-semibold">월 렌트비:</span>{" "}
                  {vehicle.price.toLocaleString()}만원
                </p>
                <p>
                  <span className="font-semibold">제조사:</span>{" "}
                  {vehicle.is_domestic ? "국산" : "수입"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 견적 계산 */}
        <div className="bg-background-card rounded-card shadow-card p-6">
          <h2 className="text-xl font-bold mb-6 text-secondary-DEFAULT">
            견적 계산
          </h2>
          <div className="space-y-6">
            {/* 계약 기간 */}
            <div>
              <label className="block text-sm font-medium text-secondary-DEFAULT mb-2">
                계약 기간 (개월)
              </label>
              <select
                name="months"
                value={estimate.months}
                onChange={handleEstimateChange}
                className="w-full p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT"
              >
                <option value="12">12개월</option>
                <option value="24">24개월</option>
                <option value="36">36개월</option>
                <option value="48">48개월</option>
              </select>
            </div>

            {/* 보험 선택 */}
            <div>
              <label className="block text-sm font-medium text-secondary-DEFAULT mb-2">
                보험 종류
              </label>
              <select
                name="insurance"
                value={estimate.insurance}
                onChange={handleEstimateChange}
                className="w-full p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT"
              >
                <option value="basic">기본 보험 (월 3만원)</option>
                <option value="premium">프리미엄 보험 (월 5만원)</option>
              </select>
            </div>

            {/* 선수금 */}
            <div>
              <label className="block text-sm font-medium text-secondary-DEFAULT mb-2">
                선수금 (만원)
              </label>
              <input
                type="number"
                name="downPayment"
                value={estimate.downPayment}
                onChange={handleEstimateChange}
                className="w-full p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT"
                min="0"
              />
            </div>

            {/* 총 비용 */}
            <div className="bg-background-DEFAULT p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2 text-secondary-DEFAULT">
                예상 총 비용
              </h3>
              <p className="text-2xl font-bold text-primary-DEFAULT">
                {calculateTotalCost().toLocaleString()}만원
              </p>
            </div>

            {/* 문의하기 버튼 */}
            <Link
              to={`/inquiry?vehicleId=${vehicleId}`}
              className="block w-full text-center bg-primary-DEFAULT text-secondary-DEFAULT py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              상담 신청하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickEstimateDetail;
