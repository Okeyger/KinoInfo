import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
}

const SideBarItem = ({ title, label, icon: Icon, isActive }: Props) => (
  <Link
    href={label}
    className="flex flex-grow justify-center sm:justify-start items-center gap-4 cursor-pointer hover:bg-slate-100 p-2 sm:p-4 rounded-xl"
  >
    <Icon size={24} className={`${isActive && "text-primary"}`} />
    <h2
      className={cn(
        "hidden text-2xl sm:block ",
        isActive && "underline underline-offset-8 decoration-primary"
      )}
    >
      {title}
    </h2>
  </Link>
);

export default SideBarItem;
