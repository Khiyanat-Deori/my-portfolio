import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className={`container mx-auto my-8 p-6 bg-gray-800 text-white rounded-lg shadow-lg transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      ref={ref}
    >
      <div className="flex flex-col items-center text-center">
        <h2
          className={`text-3xl font-mono font-bold mb-4 text-green-400 ${
            inView ? 'bounce-in' : ''
          }`}
        >
          Contact
        </h2>
        <div className="space-y-2 font-mono">
          <p>
            Email:{' '}
            <a
              href="mailto:deorikhiyanat@gmail.com"
              className="text-[#007a91] hover:text-blue-300 transition-colors duration-300"
            >
              deorikhiyanat@gmail.com
            </a>
            </p>
            <p>
              Phone:{' '} 
              <a
                href="tel:+918638515081"
                className="text-[#007a91] hover:text-blue-300 transition-colors duration-300"
              >
                +91-8638515081
              </a>
            </p>

          <p>Location: Morigaon-782105, Assam, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
