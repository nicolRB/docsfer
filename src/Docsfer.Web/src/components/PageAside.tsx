import React, { useState } from "react";
import { House, ChevronsRight, Users } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";

const PageAside = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const menuItems = [
    { to: "/dashboard", icon: House, label: "Dashboard", exact: true },
    { to: "/groups", icon: Users, label: "Groups" },
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
        className={`transition-all duration-200 ease-in-out ${sidebarWidth} flex flex-col relative border-r border-zinc-700`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className={`flex-1 p-2`}>
          <ul className="flex flex-col gap-2">
            {menuItems.map(({ to, icon: Icon, label, exact }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={!!exact}
                  className={({ isActive }) =>
                    `flex items-center w-full py-3 px-3.5 gap-3 font-gabarito rounded-lg dark:hover:bg-zinc-800 dark:text-zinc-200 ${
                      isActive
                        ? "dark:bg-zinc-800 dark:text-zinc-200"
                        : "dark:text-zinc-500"
                    }`
                  }
                >
                  <Icon className="size-5 flex-shrink-0 " />
                  <span
                    className={`${
                      isExpanded || isPinned
                        ? "opacity-100 visible"
                        : "opacity-0 invisible p-0 m-0"
                    } transition-all duration-300 whitespace-nowrap`}
                  >
                    {label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageAside;
