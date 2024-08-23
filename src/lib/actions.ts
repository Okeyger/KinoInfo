const storage = {
  get: (key: string) => localStorage?.getItem(key),
  set: (key: string, value: string) => localStorage?.setItem(key, value),
};

export const getFavorites = () =>
  storage
    .get("favorites")
    ?.split(",")
    ?.filter((value) => value && value) || [];

export const isFavorite = (id: number) => {
  const idString = String(id);
  const prevState = getFavorites();
  const index = prevState?.indexOf(idString);
  return index !== -1;
};

export const setFavoritesLL = (id: number) => {
  const idString = String(id);
  const prevState = getFavorites();
  const index = prevState?.indexOf(idString);
  if (index !== -1) {
    delete prevState[index];
  } else {
    prevState.push(idString);
  }
  storage.set(
    "favorites",
    prevState?.filter((value) => value && value)?.join(",")
  );
};
