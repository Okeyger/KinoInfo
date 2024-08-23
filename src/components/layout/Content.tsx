"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination, PaginationContent, PaginationLink } from "../ui";
import { getData } from "@/lib/services";
import MovieCard from "../MovieCard";
import Filters from "./Filters";
import { getFavorites } from "@/lib/actions";
import NotFound from "../NotFound";
import dynamic from "next/dynamic";

interface Props {
  isHomePage?: boolean;
}

const Content = ({ isHomePage }: Props) => {
  const [page, setPage] = useState(1);
  const favorites = getFavorites();

  const { isLoading, isError, data } = useQuery({
    queryKey: [{ page }],
    queryFn: () =>
      getData(
        `${
          isHomePage
            ? "&lists=top250"
            : favorites.map((id) => `&id=${id}`).join("\n")
        }`,
        page
      ),
  });

  return (
    <div className="pt-4 sm:pt-6 flex flex-1 flex-grow flex-shrink flex-col justify-between max-w-[930px]">
      <div className="flex flex-col gap-4 sm:gap-4 flex-grow h-full">
        <div className="flex justify-between gap-2 py-0.5 z-10 bg-white sticky top-0">
          <h3 className="px-4 text-3xl font-medium">
            {isHomePage ? "Главная" : "Избранные"}
          </h3>
          <Filters className={`${isHomePage ? "visible" : "invisible"}`} />
        </div>
        <div className="overflow-y-auto flex-grow h-[80vh] w-full px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.statusCode === 403 || (!data && <NotFound />)}
          {isHomePage
            ? data?.docs?.map((item: any) => (
                <MovieCard key={item.id} data={item} />
              ))
            : favorites.length > 0
            ? data?.docs?.map((item: any) => (
                <MovieCard key={item.id} data={item} />
              ))
            : "ниче нет"}
        </div>
      </div>

      <Pagination className="sticky bg-white sm:p-2 border-t-2 bottom-0">
        <PaginationContent>
          {[...Array(6)].map((_, i) => (
            <PaginationLink key={i} onClick={() => setPage(i + 1)}>
              {i + 1}
            </PaginationLink>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Content;
