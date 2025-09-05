import React, { useState } from "react";
import { House, ChevronsRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageAside = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const menuItems = [
    { icon: House, label: "Dashboard" },
    { icon: Users, label: "Groups" },
  ];

  const handleMouseEnter = () => {
    if (!isPinned) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      setIsExpanded(false);
    }
  };

  const togglePin = () => {
    setIsPinned(!isPinned);
    setIsExpanded(!isExpanded);
  };

  const sidebarWidth = isExpanded || isPinned ? "w-64" : "w-16";

  const handleClickRoute = () => {
    navigate("/dashboard");
    alert("clicou");
  };

  // TODO: FIX HEIGHT ON HOVER
  return (
    <div className="fixed flex h-screen">
      <div
        className={`transition-all duration-300 ease-in-out ${sidebarWidth} flex flex-col relative border-r border-zinc-700`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className={`flex-1 p-2`}>
          <ul className="">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={handleClickRoute}
                  className="flex items-center w-full p-3 gap-2 font-gabarito rounded-lg dark:hover:bg-zinc-800 dark:text-zinc-200"
                >
                  <item.icon className="size-5 flex-shrink-0 dark:text-zinc-400" />
                  <span
                    className={`${
                      isExpanded || isPinned
                        ? "opacity-100 visible"
                        : "opacity-0 invisible p-0 m-0 size-0"
                    } transition-all duration-300 whitespace-nowrap`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageAside;
