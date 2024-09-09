import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
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
          About Me
        </h2>
        <p
          className={`text-base font-mono leading-relaxed ${
            inView ? 'bounce-in' : ''
          }`}
        >
          I am Khiyanat Deori, a Full-Stack Developer with a strong foundation in web development technologies
          and extensive experience in designing, developing, and maintaining responsive web applications.
          Passionate about enhancing web applications to improve user experience and optimize functionality.
        </p>
        <Link
          to="contact" 
          smooth={true}
          duration={500}
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white font-mono font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default About;
