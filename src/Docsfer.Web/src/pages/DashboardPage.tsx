import React from "react";
import PageHeader from "../components/PageHeader";
import PageAside from "../components/PageAside";
import CardTemplate from "../components/base/dashboard/CardTemplate";

const DashboardPage = () => {
  const cardMock = [
    {
      username: "Jaozin Jaozao",
      date: "05/09/2025 20:00:01",
      action: "Compartilhou",
      item: "Exemplo.pdf",
      receiver: "RH",
    },
    {
      username: "Carlos Santos",
      date: "05/09/2025 18:30:15",
      action: "Enviou",
      item: "Apresentacao_vendas.pptx",
      receiver: "Comercial",
    },
    {
      username: "Carlos Santos",
      date: "05/09/2025 18:30:15",
      action: "Enviou",
      item: "Planilha.xlsx",
      receiver: "Comercial",
    },
    {
      username: "Jaozin Jaozao",
      date: "05/09/2025 20:00:01",
      action: "Baixou",
      item: "SatoruGojo.gif",
    },
  ];

  return (
    <div className="min-h-dvh w-dvw bg-zinc-100 dark:bg-zinc-900 overflow-hidden scrollbar-thin scrollbar-track-zinc-900">
      <PageHeader />
      <main className="flex-1 overflow-auto relative h-[calc(100dvh-48px)] w-full">
        <PageAside />
        <div className="relative z-10 ml-16 h-[400dvh]">
          <div className="flex flex-col gap-2 px-6 py-4">
            <h2 className="font-josefin text-xl dark:text-zinc-400">
              Bem-vindo de volta, Jaozin!
            </h2>
            <div className="flex flex-col gap-12">
              {/* ↓ Seção 1: Atividade recente ↓ */}
              <div className="flex flex-col pt-4 w-full gap-2 overflow-x-auto">
                <h3 className="inline-flex w-fit  font-gabarito dark:text-sky-500 tracking-wider px-3 py-2 rounded-sm dark:bg-sky-500/20">
                  Atividade Recente
                </h3>
                <div className="flex gap-4">
                  {/* Card */}
                  {/* TODO: CRIAR UM COMPONENT PRA ISSO */}
                  {cardMock.map((activity, index) => (
                    <CardTemplate key={index} {...activity} />
                  ))}
                </div>
              </div>
              {/* ↓ Seção 2: Arquivos Enviados ↓ */}
              <div className="flex flex-col">
                <h3 className="inline-flex w-fit font-gabarito dark:text-sky-500 tracking-wider px-3 py-2 rounded-sm dark:bg-sky-500/20">
                  Meus Arquivos
                </h3>
              </div>
              {/* ↓ Seção 3: Todos os Arquivos ↓ */}
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
