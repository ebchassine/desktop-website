import React from 'react';

function Projects() {
  const projects = [
    { id: 1, name: 'Project 1', description: 'A cool project using React and Next.js', image: '/images/project1.jpg' },
    { id: 2, name: 'Project 2', description: 'An awesome e-commerce site built with React and Stripe', image: '/images/project2.jpg' },
    { id: 3, name: 'Project 3', description: 'A real-time chat application using React and Socket.io', image: '/images/project3.jpg' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

