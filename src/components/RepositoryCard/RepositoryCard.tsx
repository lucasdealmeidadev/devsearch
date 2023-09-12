import Link from 'next/link';
import { Repository } from '@/types';
import { BiLinkExternal } from '@/components/Icons';

import styles from './styles.module.scss';

type RepositoryCardProps = {
  repository: Repository;
};

export function RepositoryCard({ repository }: RepositoryCardProps) {
  function textSubstring(size: number, text: string) {
    if (!text) return '';

    if (text?.length <= size) {
      return text;
    }

    return text?.substring(0, size)?.concat('...');
  }

  return (
    <div className={styles.repository} key={repository?.name}>
      <h1>
        {textSubstring(24, repository?.name)}
      </h1>

      <p>{textSubstring(200, repository?.description) || 'Nenhum descrição foi adicionada.'}</p>

      <Link
        href={repository?.html_url}
        target='_blank'
      >
        <BiLinkExternal
          size={25}
          color='var(--white-normal)'
        />
      </Link>
    </div>
  );
}