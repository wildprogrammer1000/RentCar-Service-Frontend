import { Link } from "react-router-dom";

const FloatingNavbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-2 z-50">
      <div className="flex space-x-2">
        <Link
          to="/quick-estimate"
          className="px-4 py-2 bg-primary-DEFAULT text-secondary-DEFAULT rounded-lg hover:bg-primary-dark transition-colors"
        >
          간편 견적
        </Link>
        <Link
          to="/vehicles"
          className="px-4 py-2 bg-background-card text-secondary-DEFAULT rounded-lg hover:bg-gray-100 transition-colors"
        >
          차량보기
        </Link>
        <Link
          to="/reviews"
          className="px-4 py-2 bg-background-card text-secondary-DEFAULT rounded-lg hover:bg-gray-100 transition-colors"
        >
          후기
        </Link>
        <Link
          to="/promotions"
          className="px-4 py-2 bg-background-card text-secondary-DEFAULT rounded-lg hover:bg-gray-100 transition-colors"
        >
          이벤트
        </Link>
      </div>
    </div>
  );
};

export default FloatingNavbar;
