'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { BsSearch } from '../components/Icons';

import logo from '../../public/logo.svg';
import styles from '../styles/page.module.scss';

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!username) return false;

    router.push(`/user/${username}`);
  }

  return (
    <>
      <header>
        <nav>

        </nav>
      </header>

      <main>
        <section className='container'>
          <div className={styles.grid}>
            <Image
              src={logo}
              width={250}
              height={250}
              quality={100}
              alt='Logo DevSearch'
            />

            <h1>DevSearch</h1>

            <div className={styles.action}>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  name='teste'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <button type='submit'>
                  <BsSearch size={30} color='var(--white-normal)' />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}
