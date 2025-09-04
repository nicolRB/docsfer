import React from "react";
import { CloudUpload, Bell, Slash } from "lucide-react";
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
    <header className="flex items-center w-full h-12 bg-gray-100 font-josefin border-b border-gray-400">
      {/* header content */}
      <nav className="flex w-full px-4 justify-between items-center">
        <div className="inline-flex justify-center items-center">
          {/* logo */}
          <div className="flex justify-center items-center w-12">
            <img src="/images/alou.png" alt="logo" />
          </div>
          {/* separator */}
          <div className="inline-flex justify-center items-center size-8 text-gray-500 [&_svg]:h-4">
            <Slash />
          </div>
          <h2 className="text-medium font-semibold">{pageName}</h2>
        </div>
        <div className="flex gap-4 items-center text-gray-800 ">
          <div className="overflow-hidden flex  items-center rounded-full border border-zinc-400">
            <button type="button" className="header-button__style group">
              <div className="[&_svg]:h-5 [&_svg]:w-5">
                <CloudUpload onClick={navImport} />
              </div>
            </button>
            <button type="button" className="header-button__style group">
              <div className="[&_svg]:h-5 [&_svg]:w-5">
                <Bell />
              </div>
            </button>
          </div>
          <span className="pt-1 inline-flex items-center justify-center text-center uppercase rounded-full w-8 h-8  border-2 border-sky-900 text-sky-900 font-semibold cursor-pointer">
            V
          </span>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
