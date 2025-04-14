import { useState, useEffect } from 'react';
import { vehicleService } from '../services/api';

const VehicleSelector = ({ onVehicleSelect }) => {
  const [selectedType, setSelectedType] = useState(true); // true: 국산, false: 수입
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brands, setBrands] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 브랜드 목록 조회
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        //console.log('브랜드 조회 시작:', selectedType);
        setLoading(true);
        setError(null);
        const data = await vehicleService.getBrands(selectedType);
        //console.log('브랜드 조회 결과:', data);
        setBrands(data);
        setSelectedBrand('');
        setVehicles([]);
      } catch (err) {
        console.error('브랜드 조회 에러:', err);
        setError('브랜드 목록을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, [selectedType]);

  // 차량 목록 조회
  useEffect(() => {
    const fetchVehicles = async () => {
      if (!selectedBrand) return;

      try {
        //console.log('차량 조회 시작:', { brand: selectedBrand, is_domestic: selectedType });
        setLoading(true);
        setError(null);
        const data = await vehicleService.getVehicles({
          brand: selectedBrand,
          is_domestic: selectedType
        });
        //console.log('차량 조회 결과:', data);
        setVehicles(data);
      } catch (err) {
        console.error('차량 조회 에러:', err);
        setError('차량 목록을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [selectedBrand, selectedType]);

  const handleTypeSelect = (isDomestic) => {
    setSelectedType(isDomestic);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleVehicleSelect = (vehicle) => {
    // 선택된 차량 데이터를 부모 컴포넌트로 전달
    onVehicleSelect({
      ...vehicle,
      is_domestic: selectedType,
      brand: selectedBrand
    });
  };

  return (
    <div className="space-y-8">
      {/* 차종 선택 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-DEFAULT">차종 선택</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleTypeSelect(true)}
            className={`p-4 rounded-card text-center transition-colors ${
              selectedType === true
                ? "bg-primary-DEFAULT text-secondary-DEFAULT"
                : "bg-background-card hover:bg-gray-100"
            }`}
          >
            국산차
          </button>
          <button
            onClick={() => handleTypeSelect(false)}
            className={`p-4 rounded-card text-center transition-colors ${
              selectedType === false
                ? "bg-primary-DEFAULT text-secondary-DEFAULT"
                : "bg-background-card hover:bg-gray-100"
            }`}
          >
            수입차
          </button>
        </div>
      </div>

      {/* 브랜드 선택 */}
      {selectedType !== null && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary-DEFAULT">브랜드 선택</h3>
          <div className="flex flex-wrap gap-4">
            {loading ? (
              <div className="w-full text-center">로딩중...</div>
            ) : error ? (
              <div className="w-full text-center text-red-500">{error}</div>
            ) : (
              brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandSelect(brand)}
                  className={`p-4 rounded-card text-center transition-colors ${
                    selectedBrand === brand
                      ? "bg-primary-DEFAULT text-secondary-DEFAULT"
                      : "bg-background-card hover:bg-gray-100"
                  }`}
                >
                  {brand}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {/* 차량 선택 */}
      {selectedBrand && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary-DEFAULT">차량 선택</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
              <div className="col-span-full text-center">로딩중...</div>
            ) : error ? (
              <div className="col-span-full text-center text-red-500">{error}</div>
            ) : (
              vehicles.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => handleVehicleSelect(vehicle)}
                  className="p-4 bg-background-card rounded-card hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={vehicle.image_url}
                      alt={vehicle.name}
                      className="w-full h-full object-cover rounded-card"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{vehicle.name}</h4>
                  <p className="text-secondary-DEFAULT">
                    {vehicle.brand} · {vehicle.type}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleSelector; 