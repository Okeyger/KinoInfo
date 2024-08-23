import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import { isFavorite, setFavoritesLL } from "@/lib/actions";
import { useState } from "react";

const MovieCard = ({ data }: { data: any }) => {
  const [favorite, setFavorite] = useState(isFavorite(data.id));
  const rating = data.rating.kp.toFixed(1);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    setFavoritesLL(data.id);
  };

  return (
    <div className="group flex flex-col gap-2 items-center">
      <div className="relative inline-block">
        <Image
          priority
          src={data.poster?.url}
          width={167}
          height={250}
          alt=""
          className="rounded-xl w-[167px] h-auto"
        />
        <div className="rounded-xl py-0.5 px-2 text-white bg-black/75 absolute top-1 left-1">
          {rating}
        </div>
        <button
          onClick={toggleFavorite}
          className="cursor-pointer absolute top-1 right-1 p-1 flex items-center justify-center"
        >
          <Heart
            size={28}
            className={cn("fill-slate-50/85", favorite && "fill-primary")}
          />
        </button>
      </div>
      <div className="text-center">
        <h1 className="text-lg">{data.name}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
