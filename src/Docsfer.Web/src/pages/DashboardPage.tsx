import React from "react";
import PageHeader from "../components/PageHeader";
import PageAside from "../components/PageAside";

const DashboardPage = () => {
  return (
    <div className="min-h-dvh w-dvw bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
      <PageHeader />
      <main className="flex-1 overflow-auto relative h-[calc(100dvh-48px)] w-full">
        <PageAside />
      </main>
    </div>
  );
};

export default DashboardPage;
