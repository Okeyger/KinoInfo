"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "./ui";

const AuthForm = () => {
  const [apiKey, setApiKey] = useState("");
  const router = useRouter();

  useEffect(() => {
    const key = localStorage.getItem("api-key");
    key ? setApiKey(JSON.parse(key)) : "";
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("api-key", JSON.stringify(apiKey));
    }
    router.push("/home");
  };

  return (
    <div className="mx-auto bg-white py-10 px-4 sm:px-8 sm:w-[450px] rounded-2xl space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl">КиноInfo</h1>
        <p className="max-w-[386px]">
          Для работы приложения требуется добавить токен из{" "}
          <a className="font-bold" href="https://kinopoisk.dev">
            kinopoisk.dev
          </a>
        </p>
      </div>
      <form className="grid gap-4" onSubmit={onSubmit}>
        <Input
          className=""
          placeholder="API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <Button className="text-black" disabled={!apiKey}>
          Продолжить
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
