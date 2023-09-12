import { FaSpinner } from "@/components/Icons";
import styles from '@/styles/loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <FaSpinner 
        size={40} 
        color='var(--black-dark)'
      />
    </div>
  );
}