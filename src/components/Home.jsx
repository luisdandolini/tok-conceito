import styles from "../styles/Home.module.css";
import Image4 from "../assets/cortinas/prega_macho/product1.jpeg";
import Image5 from "../assets/cortinas/prega_wave/product1.jpeg";
import Image6 from "../assets/persianas/double_vision/double_vision1.jpeg";
import Image7 from "../assets/persianas/romana/romana1.png";
import { useMediaQuery } from 'react-responsive';
import HomeMobile from "./mobile/HomeMobile";
import { useState, useEffect } from 'react';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });
  const [images, setImages] = useState([Image4, Image5, Image6, Image7]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <HomeMobile />;
  }

  return(
    <section className={styles.home} id="home">
      <div className={styles.details_top}></div>

      <div className={styles.container_content}>
        <div className={styles.content_text}>
          <h1>Um novo conceito em <br /> vestir <span>lares</span></h1>
          <p></p>
        </div>
        
        <div>
          <img className={`${styles.img_first} ${styles.fadeInOut}`} src={images[index % images.length]} alt="Foto do trabalho da Tok Conceito" />
          <img className={`${styles.img_second} ${styles.fadeInOut}`} src={images[(index + 1) % images.length]} alt="Foto do trabalho da Tok Conceito" />
        </div>
      </div>

      <div className={styles.details_bottom}></div>
    </section>
  )
}

export default Home;