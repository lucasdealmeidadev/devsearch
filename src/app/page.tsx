'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { BsSearch, SiGithub } from '@/components/Icons';

import NProgress from 'nextjs-toploader/../nprogress';

import styles from '@/styles/page.module.scss';

export default function Home() {
  const router = useRouter();
  const [slug, setSlug] = useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!slug) return false;

    NProgress.start();

    router.push(`/users/${slug}`);

    NProgress.done();
  }

  return (
    <>
      <section>
        <div className={styles.grid}>
          <SiGithub
            size={130}
            color='var(--black-dark)'
          />

          <h1>DevSearch</h1>

          <div className={styles.action}>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='teste'
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />

              <button type='submit'>
                <BsSearch size={30} color='var(--white-normal)' />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
