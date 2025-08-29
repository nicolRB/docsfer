import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";

export const ROUTES = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
