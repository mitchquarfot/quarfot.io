import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Mitch Quarfot. All rights reserved.
        </p>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/mitchquarfot/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:mquarfot@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
