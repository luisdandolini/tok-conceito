import { useState, useRef, useEffect } from "react";
import styles from "../styles/Products.module.css";
import Americana from "../assets/cortinas/prega-americana.jpeg";
import Macho from "../assets/cortinas/prega-macho.jpeg";
import Wave from "../assets/cortinas/pregra-wave.jpeg";
import Xale from "../assets/cortinas/Prega-Xale.jpg";
import Double from "../assets/persianas/double-vision.jpeg";
import Horizontal from "../assets/persianas/horizontal.jpeg";
import Rolo from "../assets/persianas/rolo.jpeg";
import Romana from "../assets/persianas/romana.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const Products = () => {
  const [product, setProduct] = useState("Persianas");
  const [selectedImages, setSelectedImages] = useState([]);
  const centeredButtonRef = useRef(null);
  const buttonRefs = useRef([]);

  const openCarousel = (images) => {
    setSelectedImages(images);
  };

  const closeCarousel = () => {
    setSelectedImages([]);
  };

  useEffect(() => {
    const container = centeredButtonRef.current.parentNode;
    const scrollLeft = centeredButtonRef.current.offsetLeft - (container.offsetWidth / 2) + (centeredButtonRef.current.offsetWidth / 2);
    container.scrollLeft = scrollLeft;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const buttonWidth = buttonRefs.current[0].offsetWidth;
      const scrollPos = buttonRefs.current[0].parentNode.scrollLeft;
      const index = Math.round(scrollPos / buttonWidth);

      setProduct(["Cortinas", "Persianas", "Tapetes", "Enxovais"][index]);
    };

    const container = buttonRefs.current[0].parentNode;
    container.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="product">
      <div className={styles.container_buttons}>
        <button
          ref={(ref) => (buttonRefs.current[0] = ref)}
          onClick={() => setProduct("Cortinas")}
          className={product === "Cortinas" ? styles.selected : ""}
        >
          Cortinas
        </button>
        <button
          ref={(ref) => {
            buttonRefs.current[1] = ref;
            centeredButtonRef.current = ref;
          }}
          onClick={() => setProduct("Persianas")}
          className={product === "Persianas" ? styles.selected : ""}
        >
          Persianas
        </button>
        <button
          onClick={() => setProduct("Tapetes")}
          className={product === "Tapetes" ? styles.selected : ""}
        >
          Tapetes
        </button>
        <button
          onClick={() => setProduct("Enxovais")}
          className={product === "Enxovais" ? styles.selected : ""}
        >
          Enxovais
        </button>
      </div>

      {product === "Cortinas" && (
        <div className={styles.container_images}>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Americana, Macho, Wave, Xale])}
            >
              <img src={Americana} alt="Cortina Azul" />
              <span className={styles.imgText}>Prega Americana</span>
            </div>

            <div
              className={styles.img}
              onClick={() => openCarousel([Americana, Macho, Wave, Xale])}
            >
              <img src={Macho} alt="Cortina Marrom" />
              <span className={styles.imgText}>Prega Macho</span>
            </div>
          </div>

          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Americana, Macho, Wave, Xale])}
            >
              <img src={Wave} alt="Cortina Azul" />
              <span className={styles.imgText}>Prega Wave</span>
            </div>

            <div
              className={styles.img}
              onClick={() => openCarousel([Americana, Macho, Wave, Xale])}
            >
              <img src={Xale} alt="Cortina Marrom" />
              <span className={styles.imgText}>Xale</span>
            </div>
          </div>
        </div>
      )}

      {product === "Persianas" && (
        <div className={styles.container_images}>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Double, Horizontal, Rolo, Romana])}
            >
              <img src={Double} alt="Cortina Azul" />
              <span className={styles.imgText}>Double Vision</span>
            </div>
            <div
              className={styles.img}
              onClick={() => openCarousel([Double, Horizontal, Rolo, Romana])}
            >
              <img src={Horizontal} alt="Cortina Marrom" />
              <span className={styles.imgText}>Horizontal</span>
            </div>
          </div>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Double, Horizontal, Rolo, Romana])}
            >
              <img src={Rolo} alt="Cortina Azul" />
              <span className={styles.imgText}>Rolô</span>
            </div>
            <div
              className={styles.img}
              onClick={() => openCarousel([Double, Horizontal, Rolo, Romana])}
            >
              <img src={Romana} alt="Cortina Marrom" />
              <span className={styles.imgText}>Romana</span>
            </div>
          </div>
        </div>
      )}

      {product === "Tapetes" && <div>Tapetes</div>}

      {product === "Enxovais" && <div>Enxovais</div>}

      {selectedImages.length > 0 && (
        <div className={styles.carouselContainer}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            dynamicHeight={true}
            width="100%"
            centerMode={true}
            centerSlidePercentage={100}
          >
            {selectedImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt="Imagem" className={styles.imageCarousel} />
              </div>
            ))}
          </Carousel>
          <Icon path={mdiClose} size={1.5} className={styles.closeButton} onClick={closeCarousel} />
        </div>
      )}

      <div className={styles.details_bottom}></div>
    </section>
  );
};

export default Products;
