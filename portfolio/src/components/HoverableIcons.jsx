export const HoverableIcons = ({ IconComponent, IconName, IconColor }) => {
  return (
    <div className="relative group h-48 w-64 flex-initial border border-cyan-950 shadow-lg duration-300 hover:-translate-y-1 hover:scale-105 rounded-lg">
      <IconComponent className={`w-full h-full ${IconColor}`} />
      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {IconName}
      </span>
    </div>
  );
};
