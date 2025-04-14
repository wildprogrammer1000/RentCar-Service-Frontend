import { Link } from "react-router-dom";

const Promotions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">프로모션/이벤트</h1>

      {/* 프로모션 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 프로모션 카드 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* 프로모션 이미지 */}
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="bg-red-500 text-secondary-DEFAULT text-sm px-2 py-1 rounded">
                진행중
              </span>
              <span className="text-gray-500 text-sm ml-2">
                2024.03.01 - 2024.03.31
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              신규 고객 첫 달 50% 할인
            </h3>
            <p className="text-gray-600 mb-4">
              신규 고객님들을 위한 특별한 혜택! 첫 달 렌트비 50% 할인 이벤트를
              진행합니다.
            </p>

            <Link
              to="/inquiry"
              className="inline-block bg-blue-600 text-secondary-DEFAULT px-4 py-2 rounded-md hover:bg-blue-700"
            >
              자세히 보기
            </Link>
          </div>
        </div>

        {/* 이벤트 카드 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* 이벤트 이미지 */}
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-secondary-DEFAULT text-sm px-2 py-1 rounded">
                예정
              </span>
              <span className="text-gray-500 text-sm ml-2">
                2024.04.01 - 2024.04.30
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">봄 맞이 특별 이벤트</h3>
            <p className="text-gray-600 mb-4">
              봄을 맞이하여 진행하는 특별 이벤트! 다양한 혜택이 준비되어
              있습니다.
            </p>

            <Link
              to="/inquiry"
              className="inline-block bg-blue-600 text-secondary-DEFAULT px-4 py-2 rounded-md hover:bg-blue-700"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </div>

      {/* 종료된 프로모션/이벤트 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">종료된 프로모션/이벤트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 종료된 프로모션 카드 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* 프로모션 이미지 */}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-gray-500 text-secondary-DEFAULT text-sm px-2 py-1 rounded">
                  종료
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  2024.02.01 - 2024.02.29
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">설날 특별 프로모션</h3>
              <p className="text-gray-600">
                설날을 맞이하여 진행했던 특별 프로모션입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
