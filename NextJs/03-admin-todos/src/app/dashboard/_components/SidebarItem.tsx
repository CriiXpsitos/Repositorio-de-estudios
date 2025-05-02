"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeDollarSignIcon,
  BookmarkCheck,
  BookmarkCheckIcon,
 
  CookieIcon,
 
  Settings,
  User2Icon,
  Workflow,
} from "lucide-react";
import { useMemo } from "react";

interface SidebarItemProps {
  icon?: string;
  name: string;
  path: string;
}

export const SidebarItem = ({ icon: Icon, name, path }: SidebarItemProps) => {
  const pathname = usePathname();

  const iconMap = useMemo(
    () => ({
      BookmarkCheck: BookmarkCheck,
      BookmarkCheckIcon: BookmarkCheckIcon,
      Settings: Settings,
      Workflow: Workflow,
      cookie: CookieIcon,
      products: BadgeDollarSignIcon,
      profile: User2Icon
    }),
    []
  );

  const IconComponent = iconMap[Icon as keyof typeof iconMap];
  const isActive = pathname === path;

  console.log("este son los paths", { pathname, path });
  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl  ${
          isActive ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
        }`}
      >
        {Icon && <IconComponent size={30} />}
        <span className="-mr-1 font-medium">{name}</span>
      </Link>
    </li>
  );
};
