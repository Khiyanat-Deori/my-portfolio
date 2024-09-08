import React from 'react';

const projects = [
  {
    name: "Sultan Multispeciality Hospital Website",
    description: "A user-friendly website for appointment bookings with an admin panel for management using React.js, Node.js, and Firebase.",
    link: "https://sultanhospital.in/"
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
  return (
    <section id="projects" className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
