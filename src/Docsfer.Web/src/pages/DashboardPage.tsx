import { CardTemplate } from "../components/base/dashboard/CardTemplate";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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

  const mockColumns = [
    { field: "Arquivo", header: "Arquivo" },
    { field: "sharedWith", header: "Compartilhado com" },
    { field: "sharedAt", header: "Data de envio" },
    { field: "groups", header: "Grupos" },
    { field: "Size", header: "Tamanho" },
    { field: "Ações", header: "Ações" },
  ];

  const products = [
    {
      Arquivo: "File1.xlsx",
      sharedWith: "Jaozin Jaozao",
      sharedAt: "31/12/2012",
      groups: "RH",
      Size: "12mb",
    },
    {
      Arquivo: "File1.xlsx",
      sharedWith: "Jaozin Jaozao",
      sharedAt: "31/12/2012",
      groups: "RH",
      Size: "12mb",
    },
  ];

  return (
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
                <CardTemplate
                  key={index}
                  {...activity}
                  receiver={activity.receiver ?? ""}
                />
              ))}
            </div>
          </div>
          {/* ↓ Seção 2: Arquivos Enviados ↓ */}
          <div className="flex flex-col gap-2">
            <h3 className="inline-flex w-fit font-gabarito dark:text-sky-500 tracking-wider px-3 py-2 rounded-sm dark:bg-sky-500/20">
              Meus Arquivos
            </h3>
            {/* TODO: Change the DataTable to make it so that each column is a <Column/>, this will make better customization possible (like clicking in a file to open its page) */}
            {/* TODO: ADD TITLE ON HOVER TO THE COLUMNS */}
            <DataTable
              value={products}
              tableStyle={{
                minWidth: "50dvw",
                fontSize: "14px",
                width: "min-content",
                textWrap: "nowrap",
              }}
            >
              {mockColumns.map((col) => (
                <Column key="col.field" field={col.field} header={col.header} />
              ))}
            </DataTable>
          </div>
          {/* ↓ Seção 3: Todos os Arquivos ↓ */}
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
