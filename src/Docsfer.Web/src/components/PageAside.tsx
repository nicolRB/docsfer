import React, { useState } from "react";
import { House, ChevronsRight, Home } from "lucide-react";

const PageAside = () => {
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

  return <div className="relative group hidden lg:block text-zinc-700"></div>;
};

export default PageAside;
