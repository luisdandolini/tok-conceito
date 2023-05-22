import styles from "../styles/Header.module.css";
import Logo from "../assets/Logo.svg"

const Header = () => {
  return(
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={Logo} alt="Logo Tok Conceito" />
        <ul className={styles.links}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Produtos</a></li>
          <li><a href="/">Depoimentos</a></li>
          <li><a href="/">Sobre nós</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
        <button className={styles.contact}>Fale conosco</button>
      </nav>
    </header> 
  )
}

export default Header