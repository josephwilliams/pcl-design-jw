import { useState } from "react";

const Sidebar = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const icons = [
    { icon: "🏠", title: "Home" },
    { icon: "📊", title: "Analytics" },
    { icon: "⚙️", title: "Settings" },
    { icon: "📩", title: "Messages" },
  ];

  return (
    <div className="flex">
      <div className="relative">
        <div
          className="bg-gray-800 h-screen w-16 flex flex-col justify-center items-center space-y-6"
          onMouseLeave={() => setHovered(null)}
        >
          {icons.map((item, index) => (
            <div
              key={index}
              className="text-white text-2xl cursor-pointer hover:text-gray-400"
              onMouseEnter={() => setHovered(index)}
            >
              {item.icon}
            </div>
          ))}
        </div>
        {hovered !== null && (
          <div
            className={`bg-gray-800 text-white absolute left-16 top-0 h-screen transition-all duration-300 w-64 p-4`}
          >
            <h1 className="text-lg">{icons[hovered].title}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
