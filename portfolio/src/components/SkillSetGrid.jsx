import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { HoverableIcons } from "./HoverableIcons";

export const SkillSetGrid = () => {
  const Icons = [
    {
      IconComponent: TiHtml5,
      IconName: "Html5",
      IconColor: "text-red-600 dark:text-red-500",
    },
    {
      IconComponent: FaCss3,
      IconName: "Css3",
      IconColor: "text-blue-500 dark:text-blue-500",
    },
    {
      IconComponent: RiTailwindCssFill,
      IconName: "TailwindCss",
      IconColor: "text-teal-500 dark:text-teal-400",
    },
    {
      IconComponent: AiOutlineJavaScript,
      IconName: "JavaScript",
      IconColor: "text-yellow-500 dark:text-yellow-400",
    },
    {
      IconComponent: FaReact,
      IconName: "React",
      IconColor: "text-blue-400 dark:text-blue-300",
    },
    {
      IconComponent: BiLogoTypescript,
      IconName: "Typescript",
      IconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      IconComponent: FaWordpress,
      IconName: "Wordpress",
      IconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      IconComponent: FaShopify,
      IconName: "Shopify",
      IconColor: "text-green-600 dark:text-green-600",
    },
    {
      IconComponent: SiMui,
      IconName: "Material UI",
      IconColor: "text-blue-600 dark:text-blue-500",
    },
   
  ];
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-5">
      {Icons.map((icon, index) => (
        <HoverableIcons
          key={index}
          IconComponent={icon.IconComponent}
          IconName={icon.IconName}
          IconColor={icon.IconColor}
        />
      ))}
    </div>
  );
};
