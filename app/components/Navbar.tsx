"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/", id: 1 },
  { name: "Men", href: "/Men", id: 2 },
  { name: "Women", href: "/Women", id: 3 },
  { name: "Teens", href: "/Teens", id: 4 },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Next<span className="text-primary">Commerce</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link) => (
            <div key={link.id}>
              <Link
                className={`text-lg font-semibold  ${
                  pathName === link.href
                    ? "text-primary"
                    : "text-gray-600 transition duration-100 hover:text-primary"
                } `}
                href={link.href}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:w-24 md:h-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
