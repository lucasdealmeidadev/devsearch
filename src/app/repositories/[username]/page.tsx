import { notFound } from 'next/navigation';

import { UserService } from '@/services';
import { RepositoriesList } from '@/components/RepositoriesList';

type PageProps = {
  params: { username: string };
};

export function generateMetadata({ params }: PageProps) {
  const { username } = params;

  return {
    title: `Lista de repositório(s) de ${username}`
  };
}

export default async function Repositories({ params }: PageProps) {
  const { username } = params;
  const repositories = await UserService.getRepositories(username);

  if (!repositories) {
    notFound();
  }

  return <RepositoriesList repositories={repositories} />;
}