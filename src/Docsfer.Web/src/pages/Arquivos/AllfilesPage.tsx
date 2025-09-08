import FileTemplate from "../../components/base/Arquivos/FileTemplate";

const AllfilesPage = () => {
  const products = [
    {
      Arquivo: "File1.xlsx",
      sharedWith: "Jaozin Jaozao",
      sharedAt: "31/12/2012",
      groups: "RH",
      Size: "12mb",
    },
    {
      Arquivo: "File2.docx",
      sharedWith: "Carlitos",
      sharedAt: "15/04/2025",
      groups: "RH",
      Size: "12mb",
    },
    {
      Arquivo: "Presentation.pptx",
      sharedWith: "Maria Silva",
      sharedAt: "10/01/2023",
      groups: "Financeiro",
      Size: "8mb",
    },
    {
      Arquivo: "Report.pdf",
      sharedWith: "Lucas Lima",
      sharedAt: "22/07/2024",
      groups: "TI",
      Size: "5mb",
    },
    {
      Arquivo: "Image.png",
      sharedWith: "Ana Paula",
      sharedAt: "03/03/2025",
      groups: "Marketing",
      Size: "3mb",
    },
    {
      Arquivo: "Notes.txt",
      sharedWith: "Pedro Santos",
      sharedAt: "18/08/2025",
      groups: "RH",
      Size: "1mb",
    },
    {
      Arquivo: "Contract.docx",
      sharedWith: "Juliana Costa",
      sharedAt: "29/05/2025",
      groups: "Jurídico",
      Size: "2mb",
    },
  ];

  return (
    <div className=" ml-16">
      <div className="flex flex-col gap-2 px-6 py-4">
        <h2 className="font-josefin text-xl dark:text-zinc-400">
          Todos os seus arquivos
        </h2>
        <div className="flex flex-wrap gap-6">
          {products.map((p, i) => (
            <FileTemplate
              key={`${p.Arquivo}-${i}`}
              fileName={p.Arquivo}
              fileDate={p.sharedAt}
              fileSize={p.Size}
              sharedBy={p.sharedWith}
            /> // TODO: errado mas depois eu mudo
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllfilesPage;
