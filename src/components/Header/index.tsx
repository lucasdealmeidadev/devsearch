import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { HiUsers } from 'react-icons/hi';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link href='/' className={styles.logo}>
          <SiGithub size={60} color="var(--white-normal)" />
        </Link>

        <Link href='/favorites' className={styles.btn_favorites}>
          <HiUsers size={25} color="var(--black-dark)" />
          Favoritos
        </Link>
      </nav>
    </header>
  );
}