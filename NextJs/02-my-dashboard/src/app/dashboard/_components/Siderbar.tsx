import Image from "next/image";
import { Atom, Calculator, Heart, PocketKnifeIcon } from "lucide-react";
import { Globe } from "lucide-react";
import { SiderbarMenu } from "./SiderbarMenu";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <Globe size={40} />,
    title: "Dashboard",
    subtitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <Calculator size={40} />,
    title: "Counter",
    subtitle: "Contador",
  },
  {
    path: "/dashboard/pokemons",
    icon: <PocketKnifeIcon size={40} />,
    title: "Pokemones",
    subtitle: "Generacion Estática ",
  },
  {
    path: "/dashboard/favorites",
    icon: <Heart size={40} />,
    title: "Favoritos",
    subtitle: "Tus favoritos :D ",
  },
];

export const Siderbar = () => {
  return (
    <aside className="bg-gray-900 w-64 h-screen flex-shrink-0 overflow-y-auto shadow-lg fixed left-0 z-10">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="my-6 px-6">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            <span>
              <Atom /> Dash
            </span>
            <span className="text-blue-500">8</span>.
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage your actions and activities
          </p>
        </div>

        {/* Profile */}
        <div className="px-6 py-6 border-b border-slate-800/80">
          <p className="text-slate-500 text-xs uppercase font-medium mb-2">
            Welcome back,
          </p>
          <a href="#" className="inline-flex items-center gap-3 group">
            <Image
              className="rounded-full w-9 h-9 border-2 border-transparent group-hover:border-blue-500 transition-all"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="User avatar"
              width={50}
              height={50}
            />
            <span className="text-sm md:text-base font-medium text-white group-hover:text-blue-500 transition-colors">
              Cristian andres peña montealegre
            </span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <div className="px-3 mb-2">
            <h2 className="text-xs uppercase font-semibold text-slate-500 tracking-wider px-3">
              Main Menu
            </h2>
          </div>
          <div className="space-y-1 px-3">
            {menuItems.map(({ path, icon, title, subtitle }) => (
              <SiderbarMenu
                key={path}
                path={path}
                icon={icon}
                title={title}
                subtitle={subtitle}
              />
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="mt-auto p-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>© 2023 Dash8</span>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Help
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
