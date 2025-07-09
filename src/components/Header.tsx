import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Header component displays the navigation bar and handles mobile menu
const Header = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to the hosting plans section and close menu
  const scrollToHostingPlans = () => {
    const element = document.getElementById("hosting-plans");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Scroll to a specific section by ID and close menu
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    // Main header container
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo-black.png"
              alt="Excel Technologies Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={scrollToHostingPlans}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Hosting Plans
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={scrollToHostingPlans}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 bg-white rounded-lg shadow-lg p-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={scrollToHostingPlans}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Hosting Plans
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
            <button
              onClick={scrollToHostingPlans}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-2"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
