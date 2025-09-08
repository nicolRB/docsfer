import { useState } from "react";
import { House, ChevronsRight, Users, Folders } from "lucide-react";
import { NavLink } from "react-router-dom";

const PageAside = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const menuItems = [
    { to: "/dashboard", icon: House, label: "Dashboard", exact: true },
    { to: "/groups", icon: Users, label: "Grupos" },
    { to: "/files", icon: Folders, label: "Todos os arquivos" },
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

  // TODO: IMPLEMENT LIGHT MODE FOR THE LOVE OF GOD
  return (
    <div className="fixed flex h-[calc(100dvh-48px)] z-50 bg-zinc-200 dark:bg-zinc-900">
      <div
        className={`transition-all duration-200 ease-in-out ${sidebarWidth} flex flex-col relative  border-r border-zinc-700`}
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
        <div className="flex items-center justify-center w-16 h-12 dark:text-zinc-400">
          {/* TODO: IMPLEMENT A WAY TO TOGGLE IF HOVER CHANGES THE WIDTH OR NOT WITH A TOOLTIP MENU */}
          <div
            className={`p-3 dark:hover:bg-zinc-800 rounded-lg mb-4 ${
              isPinned ? "dark:text-zinc-200 dark:bg-zinc-800" : ""
            }`}
            onClick={togglePin}
          >
            <ChevronsRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PageAside);
