import React, { useState, useCallback } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    const headerOffset = 74; 
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    closeMenu();
  };

  return (
    <header className="bg-gray-800 p-4 text-white fixed top-0 w-full z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Khiyanat Deori</h1>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>

        <ul
          className={`fixed lg:static lg:flex lg:space-x-4 top-0 left-0 w-full lg:w-auto h-full lg:h-auto bg-gray-800 lg:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          } lg:transform-none z-40`}
        >
          
          {isOpen && (
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white focus:outline-none lg:hidden"
              aria-label="Close Menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <li className="border-b border-gray-700 lg:border-none">
            <a
              href="#about"
              onClick={(e) => handleScrollToSection(e, 'about')}
              className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent"
            >
              About
            </a>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <a
              href="#projects"
              onClick={(e) => handleScrollToSection(e, 'projects')}
              className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent"
            >
              Projects
            </a>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <a
              href="#skills"
              onClick={(e) => handleScrollToSection(e, 'skills')}
              className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent"
            >
              Skills
            </a>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <a
              href="#experience"
              onClick={(e) => handleScrollToSection(e, 'experience')}
              className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent"
            >
              Experience
            </a>
          </li>
          <li className="border-b border-gray-700 lg:border-none">
            <a
              href="#education"
              onClick={(e) => handleScrollToSection(e, 'education')}
              className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, 'contact')}
              className="block py-4 px-6 hover:bg-gray-700 lg:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      
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

