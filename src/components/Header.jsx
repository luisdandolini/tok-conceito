import styles from "../styles/Header.module.css";
import Logo from "../assets/Logo.svg"
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderMobile from "./mobile/HeaderMobile";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <HeaderMobile />;
  }
  
  return(
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={Logo} />
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