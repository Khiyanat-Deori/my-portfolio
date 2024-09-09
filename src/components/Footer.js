// import React from 'react';

// const Footer = () => (
//   <footer className="bg-gray-800 text-white p-4">
//     <div className="container mx-auto text-center">
//       <p>&copy; 2024 K H I Y A N A T D E O R I. All rights reserved.</p>
//     </div>
//   </footer>
// );

// export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 K H I Y A N A T D E O R I. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        
        <a 
          href="https://github.com/Khiyanat-Deori" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        <a 
          href="https://www.linkedin.com/in/Khiyanat-Deori" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        
      </div>
    </div>
  </footer>
);

export default Footer;
