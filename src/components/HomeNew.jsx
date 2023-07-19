import styles from '../styles/HomeNew.module.css';
import Logo from "../assets/Logo.svg"
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import ImageFirst from "../assets/Mask1.png";
import ImageSecond from "../assets/Mask2.png";
import ImageThird from "../assets/Mask3.png";
import ImageFourth from "../assets/Mask4.png";
import HomeNewMobile from './mobile/HomeNewMobile';

const HomeNew = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });
  const [images, setImages] = useState([ImageFirst, ImageSecond, ImageThird, ImageFourth]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const smoothScroll = (sectionId, offset = 70) => {
    let sectionElement = document.querySelector(sectionId);
    sectionElement.scrollIntoView({
        behavior: 'smooth'
    });
    // Scroll adjustment
    const yCoordinate = sectionElement.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -offset; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);
  
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      const homeHeight = document.getElementById("home").offsetHeight;

      if (scrollPos > homeHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <HomeNewMobile />;
  }

  return(
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <nav className={styles.nav}>
          <img src={Logo} />
          <ul className={styles.links}>
            <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#home", 130)}>Home</a></li>
            <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#product", 130)}>Produtos</a></li>
            <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#review", 130)}>Depoimentos</a></li>
            <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#about", 130)}>Sobre nós</a></li>
            <li><a style={{cursor: 'pointer'}} onClick={() => smoothScroll("#contact", 130)}>Contato</a></li>
          </ul> 
          <button className={styles.contact} onClick={() => smoothScroll("#contact")}>Fale conosco</button>
        </nav> 
      </header> 

      <section className={`${styles.home} ${fade ? 'fadeIn' : 'fadeOut'}`} id="home">
        <div className={styles.imageWrapper}>
          <img className={`${styles.fadeInOut} ${styles.backgroundImage}`} src={images[index % images.length]} alt="Foto do trabalho da Tok Conceito" />
        </div>

        <div className={styles.details_top}></div>

        <div className={styles.container_content}>
          <div className={styles.content_text}>
            <h1>Um novo conceito em <br /> vestir <span>lares</span></h1>
            <p>Na nossa loja, você encontrará produtos de alta qualidade e um atendimento personalizado para ajudá-lo a encontrar a solução perfeita para a sua decoração.</p>
          </div>
        </div>

        <div className={styles.details_bottom}></div>
      </section>
    </>
  )
}

export default HomeNew