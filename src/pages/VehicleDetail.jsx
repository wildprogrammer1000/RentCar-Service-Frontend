import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { vehicleService } from "../services/api";

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVehicleDetails();
  }, [id]);

  const fetchVehicleDetails = async () => {
    try {
      setLoading(true);
      const response = await vehicleService.getVehicleById(id);
      setVehicle(response.data);
    } catch (err) {
      setError("차량 정보를 불러오는데 실패했습니다.");
      console.error("Error fetching vehicle details:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-8">로딩 중...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!vehicle)
    return <div className="text-center py-8">차량을 찾을 수 없습니다.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-background-card rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* 차량 이미지 */}
          <div className="md:w-1/2">
            <img
              src={vehicle.image_url}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* 차량 정보 */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-secondary-DEFAULT mb-4">
              {vehicle.brand} {vehicle.model}
            </h1>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-secondary-light">브랜드</p>
                  <p className="text-secondary-DEFAULT font-semibold">
                    {vehicle.brand}
                  </p>
                </div>
                <div>
                  <p className="text-secondary-light">차종</p>
                  <p className="text-secondary-DEFAULT font-semibold">
                    {vehicle.type}
                  </p>
                </div>
                <div>
                  <p className="text-secondary-light">카테고리</p>
                  <p className="text-secondary-DEFAULT font-semibold">
                    {vehicle.category}
                  </p>
                </div>
                <div>
                  <p className="text-secondary-light">월 렌트비</p>
                  <p className="text-primary-DEFAULT font-bold text-xl">
                    {vehicle.price}만원
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to={`/inquiry?vehicleId=${vehicle.id}`}
                  className="block w-full bg-primary-DEFAULT text-center py-3 rounded-md hover:bg-primary-dark transition-colors"
                >
                  상담 신청하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
