const KEY = process.env.NEXT_PUBLIC_lOCAL_STORAGE as string;

export function getFavorites() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const favorites: string | null = window.localStorage.getItem(KEY);
    return JSON.parse(favorites || "[]");
  }

  return [];
}

export function saveFavorite(favorite: object) {
  let data = getFavorites();
  data.push(favorite);

  return localStorage.setItem(KEY, JSON.stringify(data));
}

export function updateList(newList: object) {
  const data = localStorage.setItem(KEY, JSON.stringify(newList));

  return data;
}