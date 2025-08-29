import React from "react";
import LoginInput from "../components/common/loginInput";
import BaseButton from "../components/common/baseButton";
import { LayoutGrid } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex w-screen h-dvh bg-main-100 overflow-hidden">
      <section className="h-dvh hidden lg:flex lg:justify-between lg:flex-col pt-12  lg:w-[36dvw] bg-main-300">
        <span className="relative z-2 text-xl text-black ml-12">docsfer</span>
        <div className="relative w-full h-full z-2">
          <img
            src="/main_icon.svg"
            alt="image"
            className="absolute left-14 top-48"
          />
        </div>
        <div className="absolute left-0 top-0 h-full z-0 overflow-hidden hidden 2xl:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="777"
            height="1024"
            viewBox="0 0 777 1024"
            fill="none"
          >
            <path
              d="M774.996 785.606L743.924 991.125C736.605 1039.54 694.997 1075.33 646.036 1075.33H15.8107C-38.8655 1075.33 -83.1893 1031 -83.1893 976.326V6.94778C-83.1893 -47.7284 -38.8654 -92.0522 15.8108 -92.0522H636.495C693.904 -92.0522 739.276 -43.3799 735.252 13.8876L713.543 322.805C713.042 329.934 713.315 337.096 714.356 344.166L775.052 756.385C776.479 766.074 776.46 775.922 774.996 785.606Z"
              fill="#85AFF6"
            />
          </svg>
        </div>
      </section>
      <section className="h-dvh w-full lg:w-[64dvw]">
        <main className="flex relative items-center justify-start h-full">
          <div className="w-full sm:py-8 !px-16 md:ml-20 lg:ml-64 xl:ml-40  max-w-xl">
            <form>
              <div className="flex flex-col gap-4">
                <BaseButton variant="full" showIcon icon={<LayoutGrid />}>
                  Entrar com entraID
                </BaseButton>
                {/* SEPARATOR */}
                <div className="flex items-center gap-4 w-full ">
                  <div className="h-px flex-1 bg-black/25"></div>
                  <span className="text-gray-500  text-sm font-medium">ou</span>
                  <div className="h-px flex-1 bg-black/25"></div>
                </div>
                <LoginInput
                  labelText="Email Corporativo"
                  placeholder="email@example.com"
                  type="Email"
                />
                <LoginInput
                  labelText="Senha"
                  placeholder="Sua senha"
                  type="Password"
                />
                <BaseButton variant="border" onClick={handleLogin}>
                  Entrar com email
                </BaseButton>
              </div>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default LoginPage;
