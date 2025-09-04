import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";

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
];

export type RouteLabel = (typeof ROUTES)[number]["label"];
