import React from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    name: "Sultan Multispeciality Hospital Website",
    description: "A user-friendly website for appointment bookings with an admin panel for management using React.js, Node.js, and Firebase.",
    link: "https://sultanhospital.in/",
  },
  {
    name: "Blogging Website",
    description: "A blogging platform with CRUD operations and user authentication built on the MERN stack.",
  },
  {
    name: "E-commerce Website",
    description: "An e-commerce application with product status management and payment integration built on the MERN stack.",
  },
  {
    name: "Diesel Generator Monitoring System",
    description: "Developed an IoT-based real-time monitoring system for diesel generators using the MQTT protocol, with Arduino for hardware interfacing and Node-RED for data flow management.",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
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
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                inView ? 'bounce-in' : ''
              }`}
            >
              <h3 className="text-xl font-semibold text-green-400">{project.name}</h3>
              <p className="mt-2 font-mono leading-relaxed">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-green-600 text-white font-mono font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
