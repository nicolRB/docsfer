import React, { useState } from "react";
import { House, ChevronsRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageAside = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const menuItems = [{ icon: Home, label: "Dashboard" }];

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

  return (
    <div className="flex h-screen">
      <div
        className={`transition-all duration-300 ease-in-out ${sidebarWidth} flex flex-col relative border-r border-zinc-700`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={handleClickRoute}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800"
                ></button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageAside;
