import React, { useState, useCallback } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Close the menu when a link is clicked
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="bg-gray-800 p-4 text-white fixed top-0 w-full z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Khiyanat Deori</h1>
        
        {/* Toggler Button for Small Screens */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <ul
          className={`fixed lg:static lg:flex lg:space-x-4 top-0 left-0 w-full lg:w-auto h-full lg:h-auto bg-gray-800 lg:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          } lg:transform-none z-40`}
        >
          <li className="border-b border-gray-700 lg:border-none">
            <a href="#about" onClick={closeMenu} className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent">About</a>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <a href="#projects" onClick={closeMenu} className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent">Projects</a>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <a href="#skills" onClick={closeMenu} className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent">Skills</a>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <a href="#experience" onClick={closeMenu} className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent">Experience</a>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <a href="#education" onClick={closeMenu} className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent">Education</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Overlay for Small Screen Menu */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
        ></div>
      )}
    </header>
  );
};

export default Header;
