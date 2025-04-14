import { Link } from 'react-router-dom';

const Reviews = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-section">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-secondary-DEFAULT">계약후기</h1>

      {/* 필터 섹션 */}
      <div className="mb-section">
        <div className="bg-background-card p-4 sm:p-card rounded-card shadow-card">
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="w-full sm:w-auto p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT">
              <option value="all">전체</option>
              <option value="recent">최신순</option>
              <option value="rating">평점순</option>
            </select>
            <select className="w-full sm:w-auto p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT">
              <option value="all">전체 차종</option>
              <option value="domestic">국산차</option>
              <option value="imported">수입차</option>
            </select>
          </div>
        </div>
      </div>

      {/* 후기 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* 후기 카드 */}
        <div className="bg-background-card rounded-card shadow-card overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="p-4 sm:p-card">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 mr-2 text-lg sm:text-xl">★★★★★</div>
              <span className="text-secondary-DEFAULT text-sm sm:text-base">5.0</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-secondary-DEFAULT">차량 모델명</h3>
            <p className="text-secondary-light mb-4 text-sm sm:text-base">제조사</p>
            
            <p className="text-secondary-DEFAULT mb-4 text-sm sm:text-base">
              차량 상태가 매우 좋았고, 서비스도 친절했습니다. 
              다음에도 이용하고 싶습니다.
            </p>
            
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-secondary-light">홍*수</span>
              <span className="text-secondary-light">2024.03.15</span>
            </div>
          </div>
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="mt-section flex justify-center">
        <nav className="flex items-center space-x-1 sm:space-x-2">
          <button className="px-2 sm:px-3 py-1 border rounded-md text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors text-sm sm:text-base">
            이전
          </button>
          <button className="px-2 sm:px-3 py-1 bg-primary-DEFAULT text-secondary-DEFAULT rounded-md text-sm sm:text-base">
            1
          </button>
          <button className="px-2 sm:px-3 py-1 border rounded-md text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors text-sm sm:text-base">
            2
          </button>
          <button className="px-2 sm:px-3 py-1 border rounded-md text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors text-sm sm:text-base">
            3
          </button>
          <button className="px-2 sm:px-3 py-1 border rounded-md text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors text-sm sm:text-base">
            다음
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Reviews; 