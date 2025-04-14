import { Link } from "react-router-dom";
import { useState } from "react";
import SearchPopup from "./SearchPopup";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/">
              <span className="text-xl font-bold text-primary-DEFAULT">
                장기렌트카
              </span>
            </Link>
            <Link
              to="/reviews"
              className="text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors text-sm sm:text-base"
            >
              계약후기
            </Link>
            <Link
              to="/promotions"
              className="text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors text-sm sm:text-base"
            >
              프로모션/이벤트
            </Link>
            <Link
              to="/today-recommendations"
              className="px-4 py-2 rounded-full bg-background-card text-secondary-DEFAULT hover:bg-background-DEFAULT transition-colors"
            >
              오늘의 추천차량
            </Link>
            <Link
              to="/inquiry"
              className="bg-primary-DEFAULT text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors text-sm sm:text-base"
            >
              문의하기
            </Link>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors text-sm sm:text-base"
            >
              차량검색
            </button>
          </div>
        </div>
      </div>
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
