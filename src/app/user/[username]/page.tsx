import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { RepositoryProps } from '@/utils/types/repository';
import { RepositoryCard } from './components/RepositoryCard';
import { DiGithubFull } from 'react-icons/di';
import styles from './styles.module.scss';

interface ParamsProps {
  params: {
    username: string;
  }
}

async function getData(username: string) {
  try {
    const decodeTitle = decodeURI(username);
    const response = await fetch(`${process.env.NEXT_API_URL}/users/${decodeTitle}/repos`, {
      next: { revalidate: 300 }
    });
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function generateMetadata({ params: { username } }: ParamsProps): Promise<Metadata> {
  return {
    title: `DevSearch | Perfil de ${username}`
  }
}

export default async function User({ params: { username } }: ParamsProps) {
  const repositories: RepositoryProps[] = await getData(username);
    
  if (repositories.length === 0) {
    redirect("/");
  }

  return (
    <section>
      <div className={styles.grid_repositories}>
        <div className={styles.profile}>
          <div className={styles.details}>
            <Image
              src={repositories[0]?.owner?.avatar_url}
              width={200}
              height={200}
              alt={repositories[0]?.owner?.login}
              quality={100}
            />

            <h1>{repositories[0]?.owner?.login}</h1>

            <Link
              href={repositories[0]?.owner?.html_url}
              target="_blank"
            >
              <DiGithubFull size={50} color="var(--white-normal)"/>
            </Link>
          </div>
        </div>

        <div className={styles.repositories}>
          {repositories?.map((repository) => (
            <RepositoryCard key={repository.name} repository={repository}/>
          ))}
        </div>
      </div>
    </section>
  );
}