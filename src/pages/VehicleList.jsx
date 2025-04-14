import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { vehicleService } from '../services/api';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    type: '',
    brand: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'price',
    sortOrder: 'asc',
    page: 1,
    limit: 12
  });

  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0
  });

  useEffect(() => {
    fetchVehicles();
  }, [filters]);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const response = await vehicleService.getVehicles(filters);
      setVehicles(response.data);
      setPagination({
        total: response.pagination.total,
        totalPages: response.pagination.totalPages
      });
    } catch (err) {
      setError('차량 목록을 불러오는데 실패했습니다.');
      console.error('Error fetching vehicles:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
      page: 1 // 필터 변경시 첫 페이지로 이동
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters(prev => ({
      ...prev,
      page: newPage
    }));
  };

  if (loading) return <div className="text-center py-8">로딩 중...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 필터 섹션 */}
      <div className="bg-background-card p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="p-2 border rounded-md bg-background-DEFAULT text-secondary-DEFAULT"
          >
            <option value="">차종 선택</option>
            <option value="domestic">국산차</option>
            <option value="imported">수입차</option>
          </select>

          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="p-2 border rounded-md bg-background-DEFAULT text-secondary-DEFAULT"
          >
            <option value="">차량 유형</option>
            <option value="소형">소형</option>
            <option value="중형">중형</option>
            <option value="대형">대형</option>
            <option value="SUV">SUV</option>
          </select>

          <div className="flex gap-2">
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              placeholder="최소 가격"
              className="p-2 border rounded-md w-full bg-background-DEFAULT text-secondary-DEFAULT"
            />
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              placeholder="최대 가격"
              className="p-2 border rounded-md w-full bg-background-DEFAULT text-secondary-DEFAULT"
            />
          </div>

          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
            className="p-2 border rounded-md bg-background-DEFAULT text-secondary-DEFAULT"
          >
            <option value="price">가격순</option>
            <option value="brand">브랜드순</option>
          </select>
        </div>
      </div>

      {/* 차량 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vehicles.map((vehicle) => (
          <Link
            key={vehicle.id}
            to={`/vehicles/${vehicle.id}`}
            className="bg-background-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={vehicle.image_url}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-secondary-DEFAULT">
                {vehicle.brand} {vehicle.model}
              </h3>
              <p className="text-primary-DEFAULT font-medium mt-2">
                월 {vehicle.price}만원
              </p>
              <p className="text-secondary-DEFAULT mt-1">
                {vehicle.category} | {vehicle.type}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* 페이지네이션 */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filters.page === page
                  ? "bg-primary-DEFAULT text-secondary-DEFAULT"
                  : "bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleList;
