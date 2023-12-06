"use client"

import { FormEvent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

export function FormSearch() {
  const router = useRouter();
  const [input, setInput] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input) return;

    router.push(`/user/search/${input}`);
  }

  return (
    <>
      <div className={styles.action}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder="Pesquise pelo nome do usuário..."
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">
            <BsSearch size={25} color="var(--white-normal)" />
          </button>
        </form>
      </div>
    </>
  );
}