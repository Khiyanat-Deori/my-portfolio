import React from 'react';
import { useInView } from 'react-intersection-observer';

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "SQL", 
  "MongoDB", "Firebase", "Git", "GitHub", "MATLAB", "C", "C++", "JAVA"
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
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
          Skills
        </h2>
        <ul className={`grid grid-cols-3 gap-4 w-full ${
          inView ? 'bounce-in' : ''
        }`}>
          {skills.map((skill, index) => (
            <li 
              key={index} 
              className="bg-gray-700 p-3 rounded shadow text-sm md:text-base lg:text-lg transition-colors duration-300 hover:bg-gray-600"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
