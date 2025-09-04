import React from "react";
import PageHeader from "../components/PageHeader";
import PageAside from "../components/PageAside";

const DashboardPage = () => {
  return (
    <div className="h-dvh w-dvw bg-zinc-100 dark:bg-zinc-900">
      <PageHeader />
      <main className="relative">
        <PageAside />
      </main>
    </div>
  );
};

export default DashboardPage;
