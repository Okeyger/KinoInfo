import { SlidersHorizontal } from "lucide-react";
import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
  Input,
} from "../ui";
import {
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Filters = ({ className }: { className: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "flex items-center rounded-2xl justify-center gap-2 text-lg font-medium p-1.5 sm:p-2 bg-slate-100 mx-4 text-black",
            className
          )}
        >
          <SlidersHorizontal />
          Фильтры
        </Button>
      </DialogTrigger>
      <DialogOverlay className="flex items-center justify-center">
        <DialogContent className="flex justify-center rounded-md z-50 w-[200px] p-10 bg-white">
          <DialogHeader>
            <DialogTitle>Фильтры</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default Filters;
