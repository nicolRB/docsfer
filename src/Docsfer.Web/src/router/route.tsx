import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import Group from "../pages/GroupPage";
import AllfilesPage from "../pages/Arquivos/AllfilesPage";
import FileDetailsPage from "../pages/Arquivos/FileDetailsPage";

export const ROUTES = [
  {
    path: "/",
    element: <Login />,
    label: "Login",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    label: "Dashboard",
  },
  {
    path: "/groups",
    element: <Group />,
    label: "Grupos",
  },
  {
    path: "/files",
    element: <AllfilesPage />,
    label: "Todos os arquivos",
  },
  {
    path: "/files/file1", // later change to :id
    element: <FileDetailsPage />,
    label: "Filename.docx",
  },
];

export type RouteLabel = (typeof ROUTES)[number]["label"];
