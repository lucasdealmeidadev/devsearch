import { notFound } from 'next/navigation';

import { UserService } from '@/services';
import { UserList } from '@/components/UsersList';

type PageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  return {
    title: `Pesquisando por: ${slug}`
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const users = await UserService.getUsers(slug); 

  if (!users) {
    notFound();
  }

  return <UserList users={users} />;
}