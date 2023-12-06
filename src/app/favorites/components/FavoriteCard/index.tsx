"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { UserProps } from '@/utils/types/user';
import { getFavorites, updateList } from '@/utils/helpers/localStorage';

import { AiOutlineLink } from 'react-icons/ai';
import { MdPersonRemoveAlt1 } from 'react-icons/md';

import styles from './styles.module.scss';

interface FavoriteCardProps {
  favorite: UserProps['items'][0];
  setFavorites: Dispatch<SetStateAction<UserProps['items']>>;
}

export function FavoriteCard({ favorite, setFavorites }: FavoriteCardProps) {
  function handleRemoveFavorite(login: string) {
    let data: UserProps['items'] = getFavorites();
    const favoriteUsers = data?.filter(i => i?.login !== login);

    updateList(favoriteUsers);
    setFavorites(favoriteUsers);

    toast.success(`Usuário ${login} removido da lista de favoritos.`);
  }

  return (
    <div className={styles.card}>
      <Image
        src={favorite?.avatar_url}
        width={150}
        height={150}
        alt={favorite?.login}
      />

      <h1>{favorite?.login}</h1>

      <div className={styles.actions}>
        <Link href={`/user/${favorite?.login}`}>
          <AiOutlineLink
            size={25}
            color='var(--white-normal)'
          />
        </Link>

        <button onClick={() => handleRemoveFavorite(favorite?.login)}>
          <MdPersonRemoveAlt1
            size={25}
            color='var(--white-normal)'
          />
        </button>
      </div>
    </div>
  );
}