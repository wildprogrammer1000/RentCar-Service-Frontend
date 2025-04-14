import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VehicleDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 차량 이미지 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
            {/* 차량 이미지가 들어갈 자리 */}
          </div>
        </div>

        {/* 차량 정보 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">차량 모델명</h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">기본 정보</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">제조사</p>
                  <p className="font-medium">현대</p>
                </div>
                <div>
                  <p className="text-gray-600">연료</p>
                  <p className="font-medium">가솔린</p>
                </div>
                <div>
                  <p className="text-gray-600">연식</p>
                  <p className="font-medium">2024</p>
                </div>
                <div>
                  <p className="text-gray-600">주행거리</p>
                  <p className="font-medium">0km</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">렌트 정보</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">월 렌트비</p>
                  <p className="text-blue-600 font-bold text-2xl">300,000원</p>
                </div>
                <div>
                  <p className="text-gray-600">보증금</p>
                  <p className="font-medium">100만원</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">차량 옵션</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">내비게이션</p>
                  <p className="font-medium">O</p>
                </div>
                <div>
                  <p className="text-gray-600">후방카메라</p>
                  <p className="font-medium">O</p>
                </div>
                <div>
                  <p className="text-gray-600">스마트키</p>
                  <p className="font-medium">O</p>
                </div>
                <div>
                  <p className="text-gray-600">선루프</p>
                  <p className="font-medium">O</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/inquiry"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
