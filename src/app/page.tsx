import { SiGithub } from 'react-icons/si';
import { FormSearch } from '@/components/FormSearch';
import styles from '@/styles/home.module.scss';

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.grid}>
          <SiGithub size={130} color="var(--black-dark)" />

          <h1>DevSearch</h1>

          <FormSearch/>
        </div>
      </section>
    </>
  )
}
