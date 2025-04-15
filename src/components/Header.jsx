import { Link } from "react-router-dom";
import { useState } from "react";
import SearchPopup from "./SearchPopup";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: "/quick-estimate", label: "간편 견적" },
    { path: "/same-day", label: "당일 출고" },
    { path: "/today-recommendations", label: "오늘의 추천 차량" },
    { path: "/reviews", label: "계약 후기" },
    { path: "/promotions", label: "프로모션/이벤트" },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between lg:h-20">
          {/* Left side - Logo and Navigation */}
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:gap-8">
            {/* Logo and Search button row */}
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="text-xl font-bold">
                🚗 장카
              </Link>

              {/* Search and Menu buttons - Visible on mobile */}
              <div className="flex items-center gap-4 lg:hidden">
                {/* Search button */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                {/* Hamburger menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors md:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links - Visible on tablet and up */}
            <div className="hidden md:flex md:items-center md:justify-center md:py-4 md:border-t lg:border-t-0 lg:py-0">
              <nav className="flex items-center gap-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Search button - Visible on tablet and up */}
          <div className="hidden lg:flex items-center gap-4 h-16 lg:h-auto">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Dimmed Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-secondary-DEFAULT hover:text-primary-DEFAULT"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-secondary-DEFAULT hover:text-primary-DEFAULT transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Search Popup */}
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
};

export default Header;
