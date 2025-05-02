import {
  MessageSquare,
  MenuIcon,
  Search,
  ShoppingBasketIcon,
} from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";

export const TopMenu = async () => {
  const cookieStore = await cookies();
  const cookieTab = JSON.parse(cookieStore.get("cart")?.value || "{}");
  const getTotalCount = () => {
    let items = 0;
    for (const key in cookieTab) {
      items += cookieTab[key];
    }
    return items;
  };

  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 className="text-2xl text-gray-600 font-medium hidden lg:block">
          Dashboard
        </h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
          <MenuIcon size={30} />
        </button>
        <div className="flex space-x-2">
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <Search />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 ">
            <Search size={25} />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <MessageSquare size={25} />
          </button>
          <Link href="/dashboard/cart" className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <span className="text-sm absolute top-0 font-bold right-3 z-10 bg-red-400 rounded-full px-0.5 mr-2">
              {getTotalCount()}
            </span>
            <ShoppingBasketIcon size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};
