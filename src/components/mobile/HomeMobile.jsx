import styles from '../../styles/HomeMobile.module.css';
import Image1 from "../../assets/cortinas/prega_macho/product1.jpeg";
import Image2 from "../../assets/cortinas/prega_wave/product1.jpeg";
import Image3 from "../../assets/persianas/double_vision/double_vision1.jpeg";
import { useState, useEffect } from 'react';

const HomeMobile = () => {
  const [images, setImages] = useState([Image1, Image2, Image3]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <section className={styles.bg}>
      <div className={styles.container_content}>
        <h1 className={styles.title}>
          Sua casa ainda mais <span>acolhedora</span>
        </h1>
        <img
          className={`${styles.image}  ${styles.fadeInOut}`}
          src={images[index % images.length]}
          alt=""
        />
        <p className={styles.text}>
        </p>
      </div>

      <div className={styles.details_top}></div>
      <div className={styles.details_bottom}></div>
    </section>
  );
};

export default HomeMobile;