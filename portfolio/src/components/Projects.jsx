import projects from "./ProjectList";
import { FaGithub } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import Footer from "./Footer";

const Projects = () => (
  <>
    <section className="p-5 bg-gray-100 dark:bg-gray-900 pt-24">
      <h2 className="text-4xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map(({ title, image, description, github, link }) => (
          <div
            key={title}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow transition-transform hover:scale-105"
          >
            <div className="pb-3">
              <img
                src={image}
                alt={`${title} screenshot`}
                className="rounded-md object-cover h-40 w-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center">{title}</h3>
            <p className="mt-2 text-pretty text-justify">{description}</p>
            <div className="flex gap-3 justify-center mt-2">
              <a href={github} target="_blank" rel="noopener noreferrer ">
                <button className="flex items-center gap-1 px-5 py-2.5 border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 rounded text-white text-sm tracking-wider transition-colors shadow-lg">
                  <span>
                    <FaGithub />
                  </span>
                  <span>GitHub</span>
                </button>
              </a>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-1 px-5 py-2.5 border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 rounded text-white text-sm tracking-wider transition-colors shadow-lg ">
                  <span>
                    <IoIosEye />
                  </span>

                  <span>Demo</span>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </>
);

export default Projects;
