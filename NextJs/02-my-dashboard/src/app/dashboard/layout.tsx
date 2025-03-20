import type React from "react";
import { Siderbar } from "./_components/Siderbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 w-full h-screen flex overflow-hidden text-slate-300 selection:bg-blue-600 selection:text-white">
      <Siderbar />
      {/* Main Content */}
      <main className="flex-1 ml-64 relative overflow-y-auto">
        <div className="p-6 max-w-7xl h-full mx-auto text-slate-900">{children}</div>
      </main>
    </div>
  );
}
