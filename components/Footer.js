import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/heart.svg" alt="Heart" className={styles.logo} />
        Be Safe Online!
      </footer>
    </>
  )
}
