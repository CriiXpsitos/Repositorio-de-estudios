import { Sidebar } from "./_components/Sidebar";
import { TopMenu } from "./_components/TopMenu";

export default function Layout({ children }: { children: React.ReactNode }) { 
  
  return (
    <>
      {/* TODO: src/components <Sidebar /> */}

      <Sidebar />

      {/*TODO: Fin del <Sidebar /> */}

      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        {/* TODO: src/components <TopMenu /> */}
        <TopMenu />
        {/* TODO: Fin del <TopMenu /> */}
        {children}

        {/* TODO: Contenido en el Layout.tsx */}
        
      </div>
    </>
  );
}
