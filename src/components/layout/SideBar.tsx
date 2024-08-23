"use client";

import { Heart, House } from "lucide-react";
import SideBarItem from "./SideBarItem";
import { usePathname } from "next/navigation";

const items = [
  { title: "Главная", label: "home", icon: House },
  { title: "Избранные", label: "favorites", icon: Heart },
];
const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-1 flex-grow-0 justify-self-end flex-col gap-10 sm:p-6 sm:px-6 sm:rounded-r-xl w-full border-t-2 sm:border-t-0 sm:border-r-2">
      <h1 className="hidden sm:block text-4xl font-medium text-center">
        КиноInfo
      </h1>
      <nav className="flex sm:flex-col flex-wrap sm:gap-4">
        {items.map((item, i) => (
          <SideBarItem
            key={i}
            {...item}
            isActive={pathname.includes(item.label) ? true : false}
          />
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
