import React from 'react';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    degree: "B.E in Power Electronics and Instrumentation",
    institution: "Jorhat Institute of Science and Technology",
    duration: "2017-2021",
    description: "Completed Bachelor of Engineering with First Class."
  },
  {
    degree: "AISSCE in Science",
    institution: "Don Bosco School",
    duration: "2014-2016",
    description: "Completed All India Senior School Certificate Examination with First Class."
  },
  {
    degree: "HSLC",
    institution: "Morigaon H.S. & M.P. School",
    duration: "2004-2014",
    description: "Completed High School Leaving Certificate Examination with First Class Distinction."
  }
];

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
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
          Education
        </h2>
        <div className="space-y-4 w-full">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                inView ? 'bounce-in' : ''
              }`}
            >
              <h3 className="text-xl font-semibold text-green-400">{edu.degree}</h3>
              <p className="text-gray-300 font-mono">{edu.institution} - {edu.duration}</p>
              <p className="mt-2 font-mono leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
