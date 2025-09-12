import { useFileColor } from "@hooks/useFileColor";

interface CardInfoProps {
  username: string;
  date: string;
  action: string;
  item: string;
  receiver?: string;
}

const getUserInitials = (username: string): string => {
  return username
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 1);
};

const formatDate = (dateString: string): string => {
  try {
    if (dateString.includes("/")) {
      return dateString;
    }

    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hour = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    return `${day}/${month}/${year}, ${hour}:${minutes}:${second}`;
  } catch {
    return dateString;
  }
};

export const CardTemplate = ({
  username,
  date,
  action,
  item,
  receiver,
}: CardInfoProps) => {
  const initials = getUserInitials(username);
  const formattedDate = formatDate(date);
  const fileColor = useFileColor(item);

  return (
    <div className="inline-flex flex-col w-fit justify-between gap-3 p-3 rounded-lg border-2 border-dashed dark:border-sky-800 dark:bg-zinc-800">
      <div className="flex flex-col">
        <div className="flex justify-between font-quicksand">
          <span className="text-zinc-200 text-lg font-semibold">
            {username}
          </span>
          <span className="inline-flex justify-center items-center size-8 rounded-full uppercase font-semibold bg-sky-500 text-zinc-900">
            {initials}
          </span>
        </div>
        {/* DATA DE ENVIO */}
        <span className="font-gabarito text-sm text-zinc-400">
          {formattedDate}
        </span>
      </div>
      <div className="inline-flex flex-wrap gap-1 font-gabarito dark:text-zinc-400">
        {/* Ação */}
        <span className="inline-flex gap-1">
          {action.toLowerCase()}
          <span
            className={`cursor-pointer underline truncate max-w-52 ${fileColor}`}
            title={item}
          >
            {item}
          </span>
        </span>
        {/* Alvo */}
        {receiver && (
          <span className="inline-flex gap-1">
            com
            <span className="dark:text-zinc-200 underline cursor-pointer">
              {receiver}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};
