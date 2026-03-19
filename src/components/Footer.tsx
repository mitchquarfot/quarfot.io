import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gradient} />
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            quarfot<span className={styles.accent}>.io</span>
          </Link>
          <p className={styles.tagline}>Data, AdTech &amp; Cloud Solutions</p>
        </div>
        <div className={styles.navCol}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <Link href="/about" className={styles.footerLink}>About</Link>
          <Link href="/services" className={styles.footerLink}>Services</Link>
          <Link href="/experience" className={styles.footerLink}>Experience</Link>
          <Link href="/tutorials" className={styles.footerLink}>Tutorials</Link>
        </div>
        <div className={styles.navCol}>
          <h4 className={styles.colTitle}>Connect</h4>
          <a href="mailto:mitch@quarfot.io" className={styles.footerLink}>Email</a>
          <a
            href="https://www.linkedin.com/in/mitchquarfot/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Mitch Quarfot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
