import React from "react";
import { CloudUpload, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import usePageName from "../hooks/usePageName";

const PageHeader = () => {
  const pageName: string = usePageName();
  const navigate = useNavigate();

  const navImport = () => {
    // navigate("/");
    alert("botão pra ir direto para a tela de compartilhar novo arquivo");
  };

  return (
    <header className="flex items-center w-full py-7 bg-main-300 font-josefin">
      {/* logo */}
      <div className="mx-7 w-8 h-8 bg-red-500"></div>
      {/* header content */}
      <nav className="flex w-full px-16 justify-between items-center border-l-2 border-black/40">
        <h2 className="text-xl font-semibold">{pageName}</h2>
        <div className="flex gap-10 items-center text-black/50">
          <CloudUpload onClick={navImport} />
          <Bell />
          <span className="text-lg">Username</span>
          <span className="pt-1 inline-flex items-center justify-center text-center uppercase rounded-full w-8 h-8  border-2 border-black/50">
            V
          </span>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
