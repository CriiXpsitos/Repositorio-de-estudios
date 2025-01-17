import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 justify-between rounded">
      <Link href="/" className="flex items-center space-x-2">
        <HomeIcon size={24} />
        <span className="mr-2">Home</span>
      </Link>

      <div className="space-x-5">
        {navItems.map(({ text, path }) => (
          <Link href={path} key={text}>
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
};
