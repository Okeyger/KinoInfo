const headers = {
  "X-Api-Key": JSON.parse(localStorage.getItem("api-key") as string),
  accept: "application/json",
};

export const getData = async (url: string, page?: number) => {
  try {
    const res = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=50${url}`,
      {
        headers: headers as HeadersInit,
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
