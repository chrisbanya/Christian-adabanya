// About.jsx
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
// import { SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import Footer from "./Footer";
// import vectorFour from "./../../public/assets/vectorFour.jpg";
import sandy from "/assets/rb_4803.png";

const About = () => (
  <>
    <section
      id="about"
      className="pt-24 pb-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="flex flex-col-reverse md:flex-row gap-4 ">
        <div className="basis-1/2 ">
          <div className="justify-center p-5">
            <div>
              <h2 className="text-xl text-center pt-8 font-mono">
                <span className="text-red-600">Creating Solutions</span>, One
                Line of Code at a Time.
              </h2>
            </div>
            <div className="text-center pt-14 text-wrap">
              <p className="text-lg font-mono pt-3">
                Hi, I’m <span className="text-red-600">Christian</span>, a
                frontend developer passionate about building seamless and
                user-friendly web applications. My journey into tech has been
                anything but conventional, and I’ve documented my transition
                from pharmacy to development in{" "}
                <a className="text-blue-500" href="https://dev.to/christian_adabanya_c3f428/why-i-traded-a-pharmacy-degree-for-a-career-in-tech-2g3h" target="_blank">
                  this blog post
                </a>{" "}
                . With expertise in React, TypeScript, and modern web
                technologies, I thrive on crafting solutions that are both
                visually appealing and functionally robust.
              </p>
              <p className="mt-4 text-lg font-mono">
                For me, development is about creating solutions that make lives
                easier. My background in pharmacy gives me a unique perspective
                on precision, problem-solving, and user needs—qualities I bring
                to every project I work on.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 place-items-start">
          <img src={sandy} alt="photo from freepik" className="" />
        </div>
      </div>
      <div>
        <div className="text-center">
          <h2 className="font-mono text-2xl">
            Professional <span className="text-red-600">Skillset</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          <div className="border-cyan-950 border shadow-lg h-48 w-64 flex-initial ease-in duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <TiHtml5 className="w-full h-full text-red-600 dark:text-red-500" />
          </div>
          <div className="h-48 w-64 flex-initial border-cyan-950 border shadow-lg ease-in duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <FaCss3 className="w-full h-full  text-blue-500" />
          </div>
          <div className="h-48 w-64 flex-initial border border-cyan-950 shadow-lg ease-in duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <RiTailwindCssFill className="w-full h-full text-teal-500" />
          </div>
          <div className="h-48 w-64 flex-initial border border-cyan-950 shadow-lg duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <AiOutlineJavaScript className="w-full h-full text-yellow-500" />
          </div>
          <div className="h-48 w-64 flex-initial border border-cyan-950 shadow-lg duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <FaReact className="w-full h-full text-blue-400" />
          </div>
          <div className="h-48 w-64 flex-initial border border-cyan-950 shadow-lg duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <BiLogoTypescript className="w-full h-full text-blue-600" />
          </div>
          <div className="h-48 w-64 flex-initial border border-cyan-950 shadow-lg duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <FaWordpress className="w-full h-full text-blue-600" />
          </div>
          <div className="h-48 w-64 flex-initial border border-cyan-950 shadow-lg duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <FaShopify className="w-full h-full text-green-600" />
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-9">
          <h2 className="font-mono text-2xl">
            <span className="text-red-600">Tools</span> I Use
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          <div className="border-cyan-950 border shadow-lg h-48 w-64 flex-initial ease-in duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <VscVscode className="w-full h-full text-blue-600 " />
          </div>
          <div className="h-48 w-64 flex-initial border-cyan-950 border shadow-lg ease-in duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <SiPostman className="w-full h-3/4 pt-6 text-red-600 dark:text-white" />
          </div>
          <div className="h-48 w-64 flex-initial border border-cyan-950 shadow-lg ease-in duration-300 hover:-translate-y-1 hover:scale-105 rounded-md">
            <IoLogoVercel className="w-full h-full text-white bg-black dark:bg-inherit" />
          </div>
          <div className="h-48 w-64 flex-initial border border-cyan-950 shadow-lg ease-in duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
            <FaGitAlt className="w-full h-full text-red-600" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default About;
