import React from "react";
import { CloudUpload, Bell } from "lucide-react";

const pageHeader = () => {
  return (
    <header className="flex items-center w-full py-7 bg-main-300 font-josefin">
      {/* logo */}
      <div className="mx-7 w-8 h-8 bg-red-500"></div>
      {/* header content */}
      <nav className="flex w-full px-16 justify-between items-center border-l-2 border-black/40">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex gap-10 items-center text-black/50">
          <CloudUpload />
          <Bell />
          <span className="text-lg">Username</span>
          <span className="flex items-center justify-center uppercase rounded-full w-8 h-8  border-2 border-black/50">
            i
          </span>
        </div>
      </nav>
    </header>
  );
};

export default pageHeader;
