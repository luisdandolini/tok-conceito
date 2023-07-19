import styles from '../../styles/HomeNewMobile.module.css'
import Image1 from "../../assets/cortinas/prega_macho/product1.jpeg";
import Image2 from "../../assets/cortinas/prega_wave/product1.jpeg";
import Image3 from "../../assets/persianas/double_vision/double_vision1.jpeg";
import Logo from '../../assets/logo_mobile.png';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { useState, useEffect } from 'react';

const HomeNewMobile = () => {
  const [images, setImages] = useState([Image1, Image2, Image3]);
  const [index, setIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState(false)
  const handleToggle = () => setOpenMenu(!openMenu);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  const smoothScroll = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openMenu]);

  return(
    <>
      <header className={styles.container_header}>
        <img src={Logo} alt='Logo Fast Sales' className={styles.logo}></img>
        <div className={styles.menu}>
          <div onClick={handleToggle} className={styles.toggle}>
            {
              openMenu ? 
              (
                <>
                  <Icon path={mdiClose} size={1} color={'#fff'} />
                </>
              ) 
              : 
              (
                <>
                  <span className={styles.details}></span>
                  <span className={styles.details}></span>
                  <span className={styles.details}></span>
                </>
              )
            }

            {openMenu && 
              <>
                <div  className={styles.menu_itens}>
                  <ul className={styles.links}>
                    <li><a onClick={() => smoothScroll("#home")}>Home</a></li>
                    <li><a onClick={() => smoothScroll("#product")}>Produtos</a></li>
                    <li><a onClick={() => smoothScroll("#review")}>Depoimentos</a></li>
                    <li><a onClick={() => smoothScroll("#about")}>Sobre nós</a></li>
                    <li><a onClick={() => smoothScroll("#contact")}>Contato</a></li>
                  </ul>
                  <div className={styles.container_button}>
                    <button>Fale conosco</button>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </header>

      <section className={styles.bg}>
        <div className={styles.container_content}>
          <h1 className={styles.title}>
            Sua casa ainda mais <span>acolhedora</span>
          </h1>
          <p className={styles.text}>
            Na nossa loja, você encontrará produtos de alta qualidade e um atendimento personalizado para ajudá-lo a encontrar a solução perfeita para a sua decoração.
          </p>
          <img
            className={`${styles.image}  ${styles.fadeInOut}`}
            src={images[index % images.length]}
            alt=""
          />
        </div>

        <div className={styles.details_top}></div>
        <div className={styles.details_bottom}></div>
      </section>
    </>
  )
}

export default HomeNewMobile;