import styles from "./FooterStyles.module.css"

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
        <p>&#169; 2024 Imran Shaikh. <br />
            All rights reserved.
        </p>
    </section>
  )
}

export default Footer