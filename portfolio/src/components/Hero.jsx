// import homeFoto from '/assets/rb_4817.png'
import homeFoto from "/assets/rb_2673.png";
// import homeFoto from "/assets/rb_2417.png";
import { Link } from "react-router-dom";

const Hero = () => (
  <>
    <section className="flex flex-col-reverse md:flex-row min-h-screen items-center text-center p-5  bg-gray-100 dark:bg-gray-900">
      <div className=" basis-1/2 ">
        <h1 className="text-3xl font-mono text-gray-900 dark:text-gray-100">
          Hi there, I'm <span className="text-red-600">Christian</span>{" "}
          Adabanya.
        </h1>
        <p className="mt-4 mb-6 text-xl text-gray-700 dark:text-gray-300">
          A Frontend Developer focused on building engaging digital experiences.
        </p>
        <div>
          <Link
            to="/contact"
            className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          >
            Let's Connect
          </Link>
          <Link
            to="/projects"
            className="mt-8 ml-2 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          >
            View My Work
          </Link>
        </div>
      </div>
      <div className="basis-1/2 ">
        <img
          src={homeFoto}
          alt="an illustration of a hand typing on a computer from freepik"
        />
      </div>
    </section>
  </>
);

export default Hero;
