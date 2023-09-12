import Link from 'next/link';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { AiOutlineLink, MdPersonRemoveAlt1 } from '@/components/Icons';
import { User } from '@/types';

import styles from './styles.module.scss';

type FavoriteProps = {
  favorite: User['items'][0];
  setFavorites: Dispatch<SetStateAction<User['items']>>;
}

export function FavoriteCard({ favorite, setFavorites }: FavoriteProps) {

  function handleRemoveFavorite(login: string) {
    const favorites: User['items'] = JSON.parse(localStorage.getItem('@devsearch') || '[]');

    let filterFavorites = favorites?.filter(favorite => favorite?.login !== login);

    setFavorites(filterFavorites);
    localStorage.setItem('@devsearch', JSON.stringify(filterFavorites));

    toast.success(`Usuário: ${login} removido com sucesso.`);
  }

  return (
    <div className={styles.card} key={favorite?.login}>
      <Image
        src={favorite?.avatar_url}
        width={150}
        height={150}
        alt={favorite?.login}
      />

      <h1>{favorite?.login}</h1>

      <div className={styles.actions}>
        <Link href={`/repositories/${favorite?.login}`}>
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