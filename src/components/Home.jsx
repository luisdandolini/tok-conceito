import styles from "../styles/Home.module.css";
import Image4 from "../assets/cortinas/prega-macho.jpeg";
import Image5 from "../assets/cortinas/pregra-wave.jpeg";
import Image6 from "../assets/persianas/rolo.jpeg";
import Image7 from "../assets/persianas/romana.png";
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
    }, 2000);
    return () => clearInterval(timer);
  }, [images]);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <HomeMobile />;
  }

  return(
    <section className={styles.home}>
      <div className={styles.details_top}></div>

      <div className={styles.container_content}>
        <div className={styles.content_text}>
          <h1>Sua casa ainda mais <br /> <span>acolhedora</span></h1>
          <p>Transforme sua casa em um espaço sofisticado e aconchegante com nossa ampla variedade de cortinas, persianas e almofadas.</p>
        </div>
        
        <div>
          <img className={styles.img_first} src={images[index % images.length]} alt="Foto do trabalho da Tok Conceito" />
          <img className={styles.img_second} src={images[(index + 1) % images.length]} alt="Foto do trabalho da Tok Conceito" />    
        </div>
      </div>

      <div className={styles.details_bottom}></div>
    </section>
  )
}

export default Home;