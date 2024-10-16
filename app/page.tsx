import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <iframe src="https://your-external-website.com" width="100%" height="600"></iframe>

      <script>
        // Redirect to the external website on any click within the iframe
        const iframe = document.querySelector('iframe');
        iframe.addEventListener('click', () => {
          window.location.href = iframe.src;
        });
      </script>
    </div>
  );
}
