import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

export const ToolsSection = () => {
  return (
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
  );
};
