"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SideBar from "./layout/SideBar";
import Content from "./layout/Content";

const queryClient = new QueryClient();

interface Props {
  isHomePage?: boolean;
}

const MainLayout = ({ isHomePage }: Props) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-white rounded-xl h-full sm:h-auto flex flex-col-reverse sm:flex-row justify-between w-full sm:w-auto">
        <SideBar />
        <QueryClientProvider client={queryClient}>
          <Content isHomePage={isHomePage} />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default MainLayout;
