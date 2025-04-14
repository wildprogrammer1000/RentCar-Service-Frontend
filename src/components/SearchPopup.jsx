import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchPopup = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed top-16 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-secondary-DEFAULT">차량 검색</h2>
          <button
            onClick={onClose}
            className="text-secondary-light hover:text-secondary-DEFAULT"
          >
            ✕
          </button>
        </div>
        
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="차량명을 입력하세요"
              className="w-full p-2 border rounded-md text-secondary-DEFAULT bg-background-DEFAULT text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link
            to={`/vehicles?search=${searchTerm}`}
            className="bg-primary-DEFAULT text-secondary-DEFAULT px-4 py-2 rounded-md hover:bg-primary-dark transition-colors text-sm whitespace-nowrap"
          >
            검색
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup; 