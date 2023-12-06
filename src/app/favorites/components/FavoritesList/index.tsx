"use client"

import { useState, useEffect } from 'react';
import { UserProps } from '@/utils/types/user';
import { getFavorites } from '@/utils/helpers/localStorage';
import { FavoriteCard } from '../FavoriteCard';
import Loading from '@/app/loading';

import styles from './styles.module.scss';

export function FavoritesList() {
  const [favorites, setFavorites] = useState<UserProps['items']>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setFavorites(getFavorites());
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      {favorites?.length === 0 && (
        <p className={styles.notFoundFavorites}>Você não possui nenhum usuário salvo :(</p>
      )}

      {favorites?.map(favorite => (
        <FavoriteCard
          key={favorite?.login}
          favorite={favorite}
          setFavorites={setFavorites}
        />
      ))}
    </>
  );
}