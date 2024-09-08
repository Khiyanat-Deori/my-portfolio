import React from 'react';

const experiences = [
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
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company} - {exp.duration}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
