import styles from "../styles/Header.module.css";
import Logo from "../assets/Logo.svg"
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderMobile from "./mobile/HeaderMobile";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  const smoothScroll = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

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
          <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#home")}>Home</a></li>
          <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#product")}>Produtos</a></li>
          <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#review")}>Depoimentos</a></li>
          <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#about")}>Sobre nós</a></li>
          <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#contact")}>Contato</a></li>
        </ul> 
        <button className={styles.contact} onClick={() => smoothScroll("#contact")}>Fale conosco</button>
      </nav> 
    </header> 
  )
}

export default Header