import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen @container mx-auto container">
      <TopMenu />
      <Sidebar />
      {children}
    </main>
  );
}
