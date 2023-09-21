import { useState, useRef, useEffect } from "react";
import styles from "../../styles/ProductsMobile.module.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

/* Cortinas */
import Product1PM from '../../assets/cortinas/prega_macho/product1.jpeg'
import Product2PM from '../../assets/cortinas/prega_macho/product2.jpeg'
import Product3PM from '../../assets/cortinas/prega_macho/product3.jpeg'
import Product4PM from '../../assets/cortinas/prega_macho/product4.jpeg'
import Product5PM from '../../assets/cortinas/prega_macho/product5.jpeg'

import Produc1PW from '../../assets/cortinas/prega_wave/product1.jpeg'
import Produc2PW from '../../assets/cortinas/prega_wave/product2.jpeg'
import Produc3PW from '../../assets/cortinas/prega_wave/product3.jpeg'
import Produc4PW from '../../assets/cortinas/prega_wave/product4.jpeg'
import Produc5PW from '../../assets/cortinas/prega_wave/product5.jpeg'

import Product1Xale from '../../assets/cortinas/xale/product1.jpeg' 
import Product2Xale from '../../assets/cortinas/xale/product2.jpeg'
import Product3Xale from '../../assets/cortinas/xale/product3.jpeg'
import Product4Xale from '../../assets/cortinas/xale/product4.jpeg'
import Product5Xale from '../../assets/cortinas/xale/product5.jpeg'

import Product1PA from '../../assets/cortinas/pregra_americana/product1.jpeg'
import Product2PA from '../../assets/cortinas/pregra_americana/product2.jpeg'
import Product3PA from '../../assets/cortinas/pregra_americana/product3.jpeg'
import Product4PA from '../../assets/cortinas/pregra_americana/product4.jpeg'

/* Persianas */
import Product1DV from '../../assets/persianas/double_vision/double_vision1.jpeg'
import Product2DV from '../../assets/persianas/double_vision/double_vision2.jpeg'
import Product3DV from '../../assets/persianas/double_vision/double_vision3.jpeg'
import Product4DV from '../../assets/persianas/double_vision/double_vision4.jpeg'
import Product5DV from '../../assets/persianas/double_vision/double_vision5.jpeg'
import Product6DV from '../../assets/persianas/double_vision/double_vision6.jpeg'
import Product7DV from '../../assets/persianas/double_vision/double_vision7.jpeg'

import Product1H from '../../assets/persianas/horizontal/horizontal1.jpeg'
import Product2H from '../../assets/persianas/horizontal/horizontal2.jpeg'
import Product3H from '../../assets/persianas/horizontal/horizontal3.jpeg'

import Product1Rolo from '../../assets/persianas/rolo/rolo1.jpeg' 
import Product2Rolo from '../../assets/persianas/rolo/rolo2.jpeg' 
import Product3Rolo from '../../assets/persianas/rolo/rolo3.jpeg' 
import Product4Rolo from '../../assets/persianas/rolo/rolo4.jpeg' 
import Product5Rolo from '../../assets/persianas/rolo/rolo5.jpeg' 

import Product1RM from '../../assets/persianas/romana/romana1.png'
import Product2RM from '../../assets/persianas/romana/romana2.png'

/* Tapetes */
import ProductBoucle1 from '../../assets/tapete/boucle/boucle1.jpeg'
import ProductBoucle2 from '../../assets/tapete/boucle/boucle2.jpeg'
import ProductBoucle3 from '../../assets/tapete/boucle/boucle3.jpeg'

import ProductGeo1 from '../../assets/tapete/geometrico/geometrico1.jpeg'
import ProductGeo2 from '../../assets/tapete/geometrico/geometrico2.jpeg'
import ProductGeo3 from '../../assets/tapete/geometrico/geometrico3.jpeg'

import ProductSintetico1 from '../../assets/tapete/sintetico/sintetico1.jpeg'
import ProductSintetico2 from '../../assets/tapete/sintetico/sintetico2.jpeg'
import ProductSintetico3 from '../../assets/tapete/sintetico/sintetico3.jpeg'

import ProductsOrganico1 from '../../assets/tapete/organico/organico1.jpeg'
import ProductsOrganico2 from '../../assets/tapete/organico/organico2.jpeg'

/* Almofada */
import Almofada1 from '../../assets/almofadas/almofada.jpeg';

/* Colchas */
import Colchas from '../../assets/colchas/colchas.jpeg';

/* Travesseiros */
import Travesseiros from '../../assets/travesseiros/travesseiros.jpeg';

const ProductsMobile = () => {
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

  return(
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
          Roupa de cama
        </button>
      </div>

      {product === "Cortinas" && (
        <div className={styles.container_images}>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Product1PA, Product2PA, Product3PA, Product4PA])}
            >
              <img src={Product1PA} alt="Cortina Azul" />
              <span className={styles.imgText}>Prega Americana</span>
            </div>

            <div
              className={styles.img}
              onClick={() => openCarousel([Product1PM, Product2PM, Product3PM, Product4PM, Product5PM])}
            >
              <img src={Product1PM} alt="Cortina Marrom" />
              <span className={styles.imgText}>Prega Macho</span>
            </div>
          </div>

          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Produc2PW, Produc1PW, Produc3PW, Produc4PW, Produc5PW])}
            >
              <img src={Produc2PW} alt="Cortina Azul" />
              <span className={styles.imgText}>Prega Wave</span>
            </div>

            <div
              className={styles.img}
              onClick={() => openCarousel([Product1Xale, Product2Xale, Product3Xale, Product4Xale, Product5Xale])}
            >
              <img src={Product1Xale} alt="Cortina Marrom" />
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
              onClick={() => openCarousel([Product1DV, Product2DV, Product3DV, Product4DV, Product5DV, Product6DV, Product7DV])}
            >
              <img src={Product1DV} alt="Cortina Azul" />
              <span className={styles.imgText}>Double Vision</span>
            </div>
            <div
              className={styles.img}
              onClick={() => openCarousel([Product2H, Product3H, Product1H])}
            >
              <img src={Product2H} alt="Cortina Marrom" />
              <span className={styles.imgText}>Horizontal</span>
            </div>
          </div>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Product1Rolo, Product2Rolo, Product3Rolo, Product4Rolo, Product5Rolo])}
            >
              <img src={Product1Rolo} alt="Cortina Azul" />
              <span className={styles.imgText}>Rolô</span>
            </div>
            <div
              className={styles.img}
              onClick={() => openCarousel([Product1RM, Product2RM])}
            >
              <img src={Product1RM} alt="Cortina Marrom" />
              <span className={styles.imgText}>Romana</span>
            </div>
          </div>
        </div>
      )}

      {product === "Tapetes" && (
        <div className={styles.container_images}>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([ProductBoucle1, ProductBoucle2, ProductBoucle3])}
            >
              <img src={ProductBoucle1} alt="Cortina Azul" />
              <span className={styles.imgText}>Boucle</span>
            </div>
            <div
              className={styles.img}
              onClick={() => openCarousel([ProductGeo1, ProductGeo2, ProductGeo3])}
            >
              <img src={ProductGeo1} alt="Cortina Marrom" />
              <span className={styles.imgText}>Geométrico</span>
            </div>
          </div>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([ProductSintetico1, ProductSintetico2, ProductSintetico3])}
            >
              <img src={ProductSintetico1} alt="Cortina Azul" />
              <span className={styles.imgText}>Sintético</span>
            </div>
            <div
              className={styles.img}
              onClick={() => openCarousel([ProductsOrganico1, ProductsOrganico2])}
            >
              <img src={ProductsOrganico1} alt="Cortina Marrom" />
              <span className={styles.imgText}>Orgânico</span>
            </div>
          </div>
        </div>
      )}

      {product === "Enxovais" && (
        <div className={styles.container_images}>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Colchas])}
            >
              <img src={Colchas} alt="Cortina Azul" />
              <span className={styles.imgText}>Colchas</span>
            </div>
            <div
              className={styles.img}
              onClick={() => openCarousel([Travesseiros])}
            >
              <img src={Travesseiros} alt="Cortina Marrom" />
              <span className={styles.imgText}>Travesseiros</span>
            </div>
          </div>
          <div className={styles.imgs}>
            <div
              className={styles.img}
              onClick={() => openCarousel([Almofada1])}
            >
              <img src={Almofada1} alt="Cortina Azul" />
              <span className={styles.imgText}>Almofadas</span>
            </div>
          </div>
        </div>
      )}

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
  )
}

export default ProductsMobile