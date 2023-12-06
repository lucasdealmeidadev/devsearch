"use client"

import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { UserProps } from '@/utils/types/user';
import { getFavorites, saveFavorite, updateList } from '@/utils/helpers/localStorage';

import { AiOutlineLink } from 'react-icons/ai';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

import styles from './styles.module.scss';

interface UserCardProps {
  user: UserProps['items'][0];
}

export function UserCard({ user }: UserCardProps) {
  const [favoritesList, setFavoritesList] = useState<UserProps['items']>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setFavoritesList(getFavorites());
    setLoading(false);
  }, []);

  function handleFavoriteUser() {
    let data: UserProps['items'] = getFavorites();
    const userAlreadyExists = data?.some(i => i?.login === user?.login);

    if (userAlreadyExists) {
      toast.warning("Usuário já está salvo em sua lista de favoritos.");
    } else {
      saveFavorite(user);
      setFavoritesList(getFavorites());
      toast.success("Usuário adicionado com sucesso a lista de favoritos.");
    }
  }

  function handleRemoveFavorite(login: string) {
    let data: UserProps['items'] = getFavorites();
    const favoriteUsers = data?.filter(i => i?.login !== login);

    updateList(favoriteUsers);
    setFavoritesList(favoriteUsers);
    toast.success("Usuário removido da lista de favoritos.");
  }

  return (
    <div className={styles.card}>
      <Image
        src={user?.avatar_url}
        width={200}
        height={200}
        alt={user?.login}
        quality={100}
      />

      <h1>{user?.login}</h1>

      <div className={styles.actions}>
        {loading ? (
          <div className={`${styles.card_footer} ${styles.skeleton}`}></div>
        ) : (
          <>
            <Link href={`/user/${user?.login}`}>
              <AiOutlineLink 
                size={25} 
                color="var(--white-normal)" 
              />
            </Link>

            {favoritesList?.some(i => i?.login === user?.login) ? (
              <button onClick={() => handleRemoveFavorite(user?.login)}>
                <MdFavorite 
                  size={25} 
                  color="var(--white-normal)" 
                />
              </button>
            ) : (
              <button onClick={() => handleFavoriteUser()}>
                <MdFavoriteBorder 
                  size={25} 
                  color="var(--white-normal)" 
                />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}