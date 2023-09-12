'use client';

import { useEffect, useState } from 'react';
import { FavoritesList } from '@/components/FavoritesList';
import { User } from '@/types';
import Loading from '../loading';

export default function Favorites() {
  const [favorites, setFavorites] = useState<User['items']>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem('@devsearch') || '[]');

    setFavorites(myList);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <FavoritesList
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}