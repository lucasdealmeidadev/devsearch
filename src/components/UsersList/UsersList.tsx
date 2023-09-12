import { User } from '@/types';
import { UserCard } from '@/components/UserCard';

import styles from './styles.module.scss';

type UserListProps = {
  users: User;
};

export function UserList({ users }: UserListProps) {
  return (
    <section>
      <div className={styles.grid_users}>
        {users?.items?.map((item) => (
          <UserCard key={item?.login} user={item}/>
        ))}
      </div>
    </section>
  );
}