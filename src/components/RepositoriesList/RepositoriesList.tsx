import Link from 'next/link';
import Image from 'next/image';

import { Repository } from '@/types';
import { RepositoryCard } from '@/components/RepositoryCard';
import { DiGithubFull } from '@/components/Icons';

import styles from './styles.module.scss';

type RepositoriesListProps = {
  repositories: Repository[];
};

export function RepositoriesList({ repositories }: RepositoriesListProps) {
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
            />

            <h1>{repositories[0]?.owner?.login}</h1>

            <Link
              href={repositories[0]?.owner?.html_url}
              target='_blank'
            >
              <DiGithubFull
                size={50}
                color='var(--white-normal)'
              />
            </Link>
          </div>
        </div>

        <div className={styles.repositories}>
          {repositories.map((repository) => (
            <RepositoryCard
              key={repository?.name}
              repository={repository}
            />
          ))}
        </div>
      </div>
    </section>
  );
}