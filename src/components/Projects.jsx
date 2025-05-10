import React, { useState } from "react";
import projectsData from "../projects.json";

const Projects = () => {
  const [projects] = useState(
    projectsData.map((project) => ({
      ...project,
      image: project.image
        ? `/assets/img/${project.image}`
        : "/assets/img/placeholder.jpeg",
    })),
  );

  return (
    <div className="min-h-full h-full">
      <div className="pt-32 flex flex-col items-center justify-center pt-6 pb-2 bg-background">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        <p className="mb-4 text-md text-center max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl">
          Here are a selection of my projects. These range from hobby projects
          to school assingments, and include things written in Java, Python, and
          Javascript.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6 max-w-[calc(80rem+3rem)] mx-auto">
        {/* 3 cards at w-80 (20rem) each + 2 gaps at 1.5rem each */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background-contrast shadow-md rounded-lg overflow-hidden w-80 transition-transform duration-100 hover:scale-102"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-primary text-background text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
