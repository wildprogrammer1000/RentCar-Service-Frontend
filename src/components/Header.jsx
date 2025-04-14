import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            장기렌트카
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/vehicles" className="text-gray-600 hover:text-blue-600">
              차량검색
            </Link>
            <Link to="/reviews" className="text-gray-600 hover:text-blue-600">
              계약후기
            </Link>
            <Link to="/promotions" className="text-gray-600 hover:text-blue-600">
              프로모션
            </Link>
            <Link to="/inquiry" className="text-gray-600 hover:text-blue-600">
              문의하기
            </Link>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 