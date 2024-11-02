const getFavoritesFromLs = () => {
  const storedFav = localStorage.getItem("favorite");
  if (storedFav) {
    return JSON.parse(storedFav);
  }
  return [];
};
const addToLS = (id) => {
  const favorite = getFavoritesFromLs();
  if (!favorite.includes(id)) {
    favorite.push(id);
  }

  saveToLs(favorite);
};
const saveToLs = (favorite) => {
  localStorage.setItem("favorite", JSON.stringify(favorite));
};

const removeFromLs = (id) => {
  const favorites = getFavoritesFromLs();
  const remaining = favorites.filter((idx) => idx === id);
  saveToLs(remaining);
};
export { getFavoritesFromLs, addToLS, removeFromLs };
