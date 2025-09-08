import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import RootLayout from "../layout/rootLayout";

import Loader from "../components/base/loader";

const Groups = React.lazy(() => import("../pages/GroupPage"));
const Files = React.lazy(() => import("../pages/Arquivos/AllfilesPage"));
const Details = React.lazy(() => import("../pages/Arquivos/FileDetailsPage"));

async function requireAuth() {
  console.log("implement later");
}

export async function filesLoader() {
  await requireAuth();

  const files = [{ id: "file1", name: "filename.docx" }];
  return { Files: files };
}

function RouteError() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-red-500">Algo deu errado</h2>
      <p>Tente novamente ou volta ao inicio.</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <RouteError />,
    /* loader: async () => {
      if (await isAuthed()) throw new redirect("/dashboard");
      return null
    } */
  },
  // App Area
  {
    element: <RootLayout />,
    errorElement: <RouteError />,
    loader: requireAuth,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "groups", element: <Groups /> },
      {
        path: "Files",
        loader: filesLoader,
        element: (
          <React.Suspense fallback={<Loader />}>
            <Files />
          </React.Suspense>
        ),
      },
      {
        path: "Details",
        loader: filesLoader,
        element: (
          <React.Suspense fallback={<Loader />}>
            <Details />
          </React.Suspense>
        ),
      },
    ],
  },
]);
