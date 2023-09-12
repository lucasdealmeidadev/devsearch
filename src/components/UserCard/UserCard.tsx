'use client';

import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

import { AiOutlineLink, MdFavoriteBorder } from '@/components/Icons';
import { User } from "@/types";

import styles from './styles.module.scss';

type UserProps = {
  user: User['items'][0];
}

export function UserCard({ user }: UserProps) {

  function handleFavoriteUser(item: User['items'][0]) {
    const myList = localStorage.getItem('@devsearch');

    let data: User['items'] = JSON.parse(myList || '[]');

    const userAlreadyExists = data.filter((user) => user?.login === item?.login).length > 0;

    if (userAlreadyExists) {
      toast.warning('Usuário já está salvo em sua lista de favoritos.');
    } else {
      data.push(item);

      localStorage.setItem('@devsearch', JSON.stringify(data));
      toast.success('Usuário adicionado com sucesso a lista de favoritos.');
    }
  }

  return (
    <div className={styles.card}>
      <Image
        src={user?.avatar_url}
        width={200}
        height={200}
        alt={user?.login}
      />

      <h1>{user?.login}</h1>

      <div className={styles.actions}>
        <Link href={`/repositories/${user?.login}`}>
          <AiOutlineLink
            size={25}
            color='var(--white-normal)'
          />
        </Link>

        <button onClick={() => handleFavoriteUser(user)}>
          <MdFavoriteBorder
            size={25}
            color='var(--white-normal)'
          />
        </button>
      </div>
    </div>
  )
}