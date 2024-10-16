import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>app/page.tsx</code>
          </p>
          </div>
        </div>
      </main>
    

 )
}
