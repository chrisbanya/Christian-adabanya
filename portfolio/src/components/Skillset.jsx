import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";

export const Skillset = () => {
  return (
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
  );
};
