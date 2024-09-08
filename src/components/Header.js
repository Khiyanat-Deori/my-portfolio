// import React, { useState } from 'react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-gray-800 p-4 text-white">
//       <nav className="container mx-auto flex justify-between items-center relative">
//         <h1 className="text-2xl font-bold">Khiyanat Deori</h1>
//         <div className="lg:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//         <ul
//           className={`lg:flex lg:space-x-4 absolute lg:static bg-gray-800 lg:bg-transparent w-full lg:w-auto transition-transform transform ${
//             isOpen ? 'translate-x-0' : '-translate-x-full'
//           } lg:translate-x-0 top-full lg:top-auto left-0 lg:left-auto`}
//         >
//           <li><a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a></li>
//           <li><a href="#projects" className="block py-2 px-4 hover:bg-gray-700">Projects</a></li>
//           <li><a href="#skills" className="block py-2 px-4 hover:bg-gray-700">Skills</a></li>
//           <li><a href="#experience" className="block py-2 px-4 hover:bg-gray-700">Experience</a></li>
//           <li><a href="#education" className="block py-2 px-4 hover:bg-gray-700">Education</a></li>
//           <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Khiyanat Deori</h1>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
        </div>
        <ul
          className={`lg:flex lg:space-x-4 absolute lg:static bg-gray-800 lg:bg-transparent w-full lg:w-auto transition-transform transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 top-full lg:top-auto left-0 lg:left-auto`}
        >
          <li><a href="#about" className="block py-2 px-4 hover:bg-gray-700">About</a></li>
          <li><a href="#projects" className="block py-2 px-4 hover:bg-gray-700">Projects</a></li>
          <li><a href="#skills" className="block py-2 px-4 hover:bg-gray-700">Skills</a></li>
          <li><a href="#experience" className="block py-2 px-4 hover:bg-gray-700">Experience</a></li>
          <li><a href="#education" className="block py-2 px-4 hover:bg-gray-700">Education</a></li>
          <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

