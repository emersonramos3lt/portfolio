import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projectsItems } from "../constants";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-28 sm:mt-50 text-zinc-900 max-w-[90%] m-auto">
      <h2
        className="text-center text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        RELEVANT PROJECTS
      </h2>

      <div className="grid lg:grid-cols-2 gap-4">
        {projectsItems.map((project, index) => (
          <div key={index}>
            <a href={project.link} target="_blank">
              <img
                src={project.image}
                alt={project.desc}
                className="
                    rounded-[20px] w-[100%] h-[300px] sm:h-[500px] object-cover transition-transform hover:scale-95"
              />
            </a>
            <h3 className='font-extrabold text-2xl sm:text-3xl my-2 sm:my-4 uppercase'>{project.title}</h3>
            <p className='font-medium text-zinc-600'>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
