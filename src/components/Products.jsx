import { useState, useEffect } from "react";
import styles from "../styles/Products.module.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { useMediaQuery } from 'react-responsive';

/* Cortinas */
import Product1PM from '../assets/cortinas/prega_macho/product1.jpeg'
import Product2PM from '../assets/cortinas/prega_macho/product2.jpeg'
import Product3PM from '../assets/cortinas/prega_macho/product3.jpeg'
import Product4PM from '../assets/cortinas/prega_macho/product4.jpeg'
import Product5PM from '../assets/cortinas/prega_macho/product5.jpeg'
import Product6PM from '../assets/cortinas/prega_macho/product6.jpeg'
import Product7PM from '../assets/cortinas/prega_macho/product7.jpeg'
import Product8PM from '../assets/cortinas/prega_macho/product8.jpeg'
import Product9PM from '../assets/cortinas/prega_macho/product9.jpeg'
import Product10PM from '../assets/cortinas/prega_macho/product10.jpeg'

import Produc1PW from '../assets/cortinas/prega_wave/product1.jpeg'
import Produc2PW from '../assets/cortinas/prega_wave/product2.jpeg'
import Produc3PW from '../assets/cortinas/prega_wave/product3.jpeg'
import Produc4PW from '../assets/cortinas/prega_wave/product4.jpeg'
import Produc5PW from '../assets/cortinas/prega_wave/product5.jpeg'
import Produc6PW from '../assets/cortinas/prega_wave/product6.jpeg'
import Produc7PW from '../assets/cortinas/prega_wave/product7.jpeg'
import Produc8PW from '../assets/cortinas/prega_wave/product8.jpeg'

import Product1Xale from '../assets/cortinas/xale/product1.jpeg' 
import Product2Xale from '../assets/cortinas/xale/product2.jpeg'
import Product3Xale from '../assets/cortinas/xale/product3.jpeg'
import Product4Xale from '../assets/cortinas/xale/product4.jpeg'
import Product5Xale from '../assets/cortinas/xale/product5.jpeg'
import Product6Xale from '../assets/cortinas/xale/product6.jpeg'
import Product7Xale from '../assets/cortinas/xale/product7.jpeg'
import Product8Xale from '../assets/cortinas/xale/product8.jpeg'

import Product1PA from '../assets/cortinas/pregra_americana/product1.jpeg'
import Product2PA from '../assets/cortinas/pregra_americana/product2.jpeg'
import Product3PA from '../assets/cortinas/pregra_americana/product3.jpeg'
import Product4PA from '../assets/cortinas/pregra_americana/product4.jpeg'
import Product5PA from '../assets/cortinas/pregra_americana/product5.jpeg'

/* Persianas */
import Product1DV from '../assets/persianas/double_vision/double_vision1.jpeg'
import Product2DV from '../assets/persianas/double_vision/double_vision2.jpeg'
import Product4DV from '../assets/persianas/double_vision/double_vision4.jpeg'
import Product6DV from '../assets/persianas/double_vision/double_vision6.jpeg'
import Product8DV from '../assets/persianas/double_vision/double_vision8.jpeg'

import Product1H from '../assets/persianas/horizontal/1.png'
import Product2H from '../assets/persianas/horizontal/2.png'
import Product3H from '../assets/persianas/horizontal/3.png'
import Product4H from '../assets/persianas/horizontal/4.jpeg'
import Product5H from '../assets/persianas/horizontal/5.jpeg'
import Product6H from '../assets/persianas/horizontal/6.jpeg'

import Product1Rolo from '../assets/persianas/rolo/rolo1.jpeg' 
import Product2Rolo from '../assets/persianas/rolo/rolo2.jpeg' 
import Product3Rolo from '../assets/persianas/rolo/rolo3.jpeg' 
import Product4Rolo from '../assets/persianas/rolo/rolo4.jpeg' 
import Product5Rolo from '../assets/persianas/rolo/rolo5.jpeg' 
import Product6Rolo from '../assets/persianas/rolo/rolo6.jpeg' 

import Product1RM from '../assets/persianas/romana/romana1.png'
import Product2RM from '../assets/persianas/romana/romana2.png'

/* Tapetes */
import Tapete1 from '../assets/tapete/tapete1.jpeg'
import Tapete2 from '../assets/tapete/tapete2.jpeg'
import Tapete3 from '../assets/tapete/tapete3.jpeg'
import Tapete4 from '../assets/tapete/tapete4.jpeg'
import Tapete5 from '../assets/tapete/tapete5.jpeg'

/* Roupa de Cama */
import RoupaDeCama1 from '../assets/roupa_de_cama/roupa_de_cama1.jpeg'
import RoupaDeCama2 from '../assets/roupa_de_cama/roupa_de_cama2.jpeg'
import RoupaDeCama3 from '../assets/roupa_de_cama/roupa_de_cama3.jpeg'
import ProductsMobile from "./mobile/ProductsMobile";

const Products = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  const openCarousel = (images) => {
    setSelectedImages(images);
  };

  const closeCarousel = () => {
    setSelectedImages([]);
  };

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <ProductsMobile />;
  }

  return (
    <section id="product">

      <div className={styles.container_images}>
        <div>
          <p className={styles.title_products}>Cortinas</p>
          <div className={styles.container_content_imgs}>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([Product5PA, Product2PA, Product3PA, Product4PA, Product1PA])}
              >
                <img src={Product3PA} alt="Cortina Azul" />
                <span className={styles.imgText}>Prega Americana</span>
              </div>
              <div
                className={styles.img}
                onClick={() => openCarousel([Product1PM, Product2PM, Product3PM, Product4PM, Product5PM, Product6PM, Product7PM, Product8PM, Product9PM, Product10PM])}
              >
                <img src={Product1PM} alt="Cortina Marrom" />
                <span className={styles.imgText}>Prega Macho</span>
              </div>
            </div>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([Produc2PW, Produc1PW, Produc3PW, Produc4PW, Produc5PW, Produc6PW, Produc7PW, Produc8PW])}
              >
                <img src={Produc2PW} alt="Cortina Azul" />
                <span className={styles.imgText}>Prega Wave</span>
              </div>
              <div
                className={styles.img}
                onClick={() => openCarousel([Product1Xale, Product2Xale, Product3Xale, Product4Xale, Product5Xale, Product6Xale, Product7Xale, Product8Xale])}
              >
                <img src={Product1Xale} alt="Cortina Marrom" />
                <span className={styles.imgText}>Xale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.container_images}>
        <div>
          <p className={styles.title_products}>Persianas</p> 
          <div className={styles.container_content_imgs}>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([Product1DV, Product2DV, Product4DV, Product6DV, Product8DV])}
              >
                <img src={Product1DV} alt="Cortina Azul" />
                <span className={styles.imgText}>Double Vision</span>
              </div>
              <div
                className={styles.img}
                onClick={() => openCarousel([Product4H, Product2H, Product3H, Product1H, Product5H, Product6H])}
              >
                <img src={Product4H} alt="Cortina Marrom" />
                <span className={styles.imgText}>Horizontal</span>
              </div>
            </div>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([Product1Rolo, Product2Rolo, Product3Rolo, Product4Rolo, Product5Rolo, Product6Rolo])}
              >
                <img src={Product1Rolo} alt="Cortina Azul" />
                <span className={styles.imgText}>Rolô</span>
              </div>
              <div
                className={styles.img}
                onClick={() => openCarousel([Product1RM, Product2RM])}
              >
                <img src={Product2RM} alt="Cortina Marrom" />
                <span className={styles.imgText}>Romana</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container_images}>
        <div>
          <p className={styles.title_products}>Tapetes</p>
          <div className={styles.container_content_imgs}>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([Tapete1, Tapete2, Tapete3, Tapete4, Tapete5])}
              >
                <img src={Tapete1} alt="Cortina Azul" />
                <span className={styles.imgText}>Nylon</span>
              </div>
              <div
                className={styles.img}
                onClick={() => openCarousel([Tapete1, Tapete2, Tapete3, Tapete4, Tapete5])}
              >
                <img src={Tapete2} alt="Cortina Marrom" />
                <span className={styles.imgText}>Bucle</span>
              </div>
            </div>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([Tapete1, Tapete2, Tapete3, Tapete4, Tapete5])}
              >
                <img src={Tapete3} alt="Cortina Azul" />
                <span className={styles.imgText}>Couro</span>
              </div>
              <div
                className={styles.img}
                onClick={() => openCarousel([Tapete1, Tapete2, Tapete3, Tapete4, Tapete5])}
              >
                <img src={Tapete4} alt="Cortina Marrom" />
                <span className={styles.imgText}>Tecido</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container_images}>
        <div>
          <p className={styles.title_products}>Roupa de Cama</p>
          <div className={styles.container_content_imgs}>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([RoupaDeCama1, RoupaDeCama2, RoupaDeCama3])}
              >
                <img src={RoupaDeCama1} alt="Cortina Azul" />
                <span className={styles.imgText}>Colchas</span>
              </div>
              <div
                className={styles.img}
                onClick={() => openCarousel([RoupaDeCama1, RoupaDeCama2, RoupaDeCama3])}
              >
                <img src={RoupaDeCama2} alt="Cortina Marrom" />
                <span className={styles.imgText}>Travesseiros</span>
              </div>
            </div>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([RoupaDeCama1, RoupaDeCama2, RoupaDeCama3])}
              >
                <img src={RoupaDeCama3} alt="Cortina Azul" />
                <span className={styles.imgText}>Almofadas</span>
              </div>
            </div>
            <div className={styles.imgs}>
              <div
                className={styles.img}
                onClick={() => openCarousel([RoupaDeCama1, RoupaDeCama2, RoupaDeCama3])}
              >
                <img src={RoupaDeCama3} alt="Cortina Azul" />
                <span className={styles.imgText}>Almofadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
