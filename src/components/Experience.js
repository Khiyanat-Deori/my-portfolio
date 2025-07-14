import React from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    role: "Associate Project Manager",
    company: "Deccan AI",
    duration: "Nov 2024 - Present",
    description: "Leading a team of 7 to ensure timely, high-quality delivery of RLHF and SFT projects. Developed a Python-based system for automated assessment scoring using JSON queries to extract data from Metabase. Built and maintained SQL dashboards in Metabase for real-time monitoring and quality analytics. Improved the UI of an internal project management tool to streamline deployment and annotator workflows. Managed project allocation and access credentials, optimizing task assignments and reducing credential management costs."  
  },
  {
    role: "Co-founder & CTO",
    company: "Byte Sized Solutions",
    duration: "Jan 2024 - Nov 2024",
    description: "Led web app development to boost user engagement; managed 5 developers, cutting dev time via agile workflows."
  },
  {
    role: "Systems Engineer",
    company: "Infosys",
    duration: "May 2022 - June 2023",
    description: "Trained extensively in web development technologies and contributed to team projects by developing scalable web applications and enhancing user interfaces."
  },
  {
    role: "Assistant General Manager",
    company: "Sultan Multispeciality Hospital",
    duration: "Jan 2022 - May 2022",
    description: "Created a comprehensive website to improve the hospital’s online visibility and managed daily operations focusing on accounts, staff, and performance."
  },
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
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
          Experience
        </h2>
        <div className="space-y-4 w-full">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                inView ? 'bounce-in' : ''
              }`}
            >
              <h3 className="text-xl font-semibold text-green-400">{exp.role}</h3>
              <p className="text-gray-300 font-mono">{exp.company} - {exp.duration}</p>
              <p className="mt-2 font-mono leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
