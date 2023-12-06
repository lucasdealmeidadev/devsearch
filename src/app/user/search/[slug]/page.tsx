import type { Metadata } from 'next';
import { FormSearch } from '@/components/FormSearch';
import { UserCard } from './components/UserCard';
import { UserProps } from '@/utils/types/user';
import styles from './styles.module.scss';

interface ParamsProps {
  params: {
    slug: string;
  }
}

async function getData(slug: string) {
  try {
    const decodeTitle = decodeURI(slug);
    const response = await fetch(`${process.env.NEXT_API_URL}/search/users?q=${decodeTitle}`);

    return response.json();
  } catch (error) {
    return null;
  }
}

export const metadata: Metadata = {
  title: 'DevSearch | Pesquisando desenvolvedores'
}

export default async function Search({ params: { slug }}: ParamsProps) {
  const users: UserProps = await getData(slug);

  return (
    <section>
      <div className={styles.grid_users}>
        <FormSearch />

        {users?.total_count === 0 && (
          <p className={styles.notFound}>Nenhum usuário encontrado, por favor pesquise novamente...</p>
        )}

        {users?.items?.map((user) => (
          <UserCard key={user?.login} user={user} />
        ))}
      </div>
    </section>
  );
}