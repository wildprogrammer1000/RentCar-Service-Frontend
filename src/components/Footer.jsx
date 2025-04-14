import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-secondary-DEFAULT">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">장기렌트카</h3>
            <p className="text-gray-400">
              최고의 서비스로 고객님의 만족을 최우선으로 생각합니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vehicles" className="text-gray-400 hover:text-secondary-DEFAULT">
                  차량검색
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-secondary-DEFAULT">
                  계약후기
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="text-gray-400 hover:text-secondary-DEFAULT">
                  프로모션
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">고객센터</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">전화: 1234-5678</li>
              <li className="text-gray-400">이메일: contact@example.com</li>
              <li className="text-gray-400">운영시간: 평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 장기렌트카. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 