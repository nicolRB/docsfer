import { CloudUpload, Bell } from "lucide-react";
import usePageName from "../hooks/usePageName";
import { Tooltip } from "primereact/tooltip";
import { useNavigate } from "react-router";

const PageHeader = () => {
  const pageName: string = usePageName();
  const navigate = useNavigate();

  const goToNewFile = () => {
    navigate("/newFile");
  };

  return (
    <header className="flex items-center w-full h-12 font-josefin border-b border-gray-400 dark:border-zinc-700">
      {/* header content */}
      <nav className="flex w-full px-4 justify-between items-center">
        <div className="inline-flex justify-center items-center">
          {/* logo */}
          <div className="flex justify-center items-center w-7 h-7">
            <picture>
              <source media="(min-width:650px)" srcSet="/images/alout.png" />
              <img
                src="https://imgs.search.brave.com/0Ep1l2eG7ZhkoVryj81G9tp7hlLeNkUgG8Wf8H9vJpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAx/L01pY3Jvc29mdC1B/enVyZS1sb2dvLTUw/MHgyODEucG5n"
                alt="logo"
              />
            </picture>
          </div>
          {/* separator */}
          <div className="inline-flex text-lg justify-center items-center size-8 text-gray-500 dark:text-zinc-700 [&_svg]:h-4">
            /
          </div>
          <h2 className="text-medium font-semibold text-zinc-400">
            {pageName}
          </h2>
        </div>
        <div className="flex gap-4 items-center text-gray-800 dark:text-zinc-400">
          <div className="overflow-hidden flex  items-center rounded-full border border-zinc-400 dark:border-zinc-700">
            <Tooltip
              target="#upload"
              autoHide={false}
              pt={{
                text: { className: "text-sm text-zinc-400" },
              }}
            />
            <button
              data-pr-tooltip="Upload"
              data-pr-position="bottom"
              id="upload"
              type="button"
              className="header-button__style group"
            >
              <div className="[&_svg]:h-5 [&_svg]:w-5">
                <button onClick={goToNewFile} className="flex items-center">
                  <CloudUpload />
                </button>
              </div>
            </button>

            <Tooltip
              target="#notifs"
              autoHide={false}
              pt={{
                text: { className: "text-sm text-zinc-400" },
              }}
            />
            <button
              id="notifs"
              data-pr-tooltip="Sem notificações"
              data-pr-position="bottom"
              type="button"
              className="header-button__style"
            >
              <div className="[&_svg]:h-5 [&_svg]:w-5">
                <Bell />
              </div>
            </button>
          </div>
          <span className="inline-flex items-center justify-center text-center uppercase rounded-full size-8  border-2 border-sky-900 text-sky-900 dark:border-sky-500 dark:text-sky-500 font-semibold cursor-pointer font-quicksand">
            J
          </span>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
