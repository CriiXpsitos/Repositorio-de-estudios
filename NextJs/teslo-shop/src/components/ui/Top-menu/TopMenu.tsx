
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { OpenMenuButton } from "./openMenuButton";

const Routes = [
  { label: "Hombres", path: "/category/men" },
  { label: "Mujeres", path: "/category/women" },
  { label: "Niños", path: "/category/kids" },
];

export const TopMenu = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      {/* Logo   */}
      <div className="flex items-center gap-2">
        <Link href={"/"} className="flex items-center gap-2">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span className={`${titleFont.className} antialiased `}>| Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block ">
        {Routes.map((route) => (
          <Link
            key={route.label}
            href={route.path}
            className="m-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {route.label}
          </Link>
        ))}
      </div>

      {/* Search, Cart, menu */}
      <div className="flex items-center gap-2 space-x-2">
        <Link href="/search">
          <IoSearchOutline className="size-5" />
        </Link>
        <Link href="/cart">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="size-5" />
          </div>
        </Link>
        <OpenMenuButton />
        
      </div>
    </nav>
  );
};
