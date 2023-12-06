import type { Metadata } from 'next';
import { FavoritesList } from './components/FavoritesList';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'DevSearch | Meus favoritos',
}

export default function Favorites() {
  return (
    <section>
      <div className={styles.grid_favorites}>
        <FavoritesList/>
      </div>
    </section>
  );
}