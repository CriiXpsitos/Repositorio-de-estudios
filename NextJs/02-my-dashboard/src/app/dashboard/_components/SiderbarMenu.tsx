'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SiderbarMenu = ({ path, icon: Icon, title, subtitle }: Props) => {

    //saber el path de la pagina con el componente pathName
    const pathname = usePathname()

  return (
    <Link
      href={path}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${pathname === path && "bg-blue-600"} text-white hover:bg-blue-700 transition-colors`}
    >
      {Icon}
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium leading-tight truncate">
          {title}
        </span>
        <span className="text-xs text-blue-300/80 hidden md:block truncate">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
