import { Dispatch, SetStateAction } from 'react';
import { FavoriteCard } from '@/components/FavoriteCard';
import { User } from '@/types';

import styles from './styles.module.scss';

type FavoritesListProps = {
  favorites: User['items'];
  setFavorites: Dispatch<SetStateAction<User['items']>>;
};

export function FavoritesList({ favorites, setFavorites }: FavoritesListProps) {
  return (
    <section>
      <div className={styles.grid_favorites}>
        {favorites?.length === 0 && (
          <p style={{ width: 'inherit', textAlign: 'center' }}>Você não possui nenhum usuário salvo :(</p>
        )}

        {favorites?.map((favorite) => (
          <FavoriteCard
            key={favorite?.login}
            favorite={favorite}
            setFavorites={setFavorites}
          />
        ))}
      </div>
    </section>
  );
}