import React from 'react';

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "SQL", "MongoDB", "Firebase", "Git", "GitHub","MATLAB","C","C++","JAVA"
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 p-2 rounded text-center">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
