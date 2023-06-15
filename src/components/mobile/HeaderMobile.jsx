import  { useState, useEffect } from 'react';
import styles from '../../styles/HeaderMobile.module.css';
import Logo from '../../assets/logo_mobile.png';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function HeaderMobile() {
  const [openMenu, setOpenMenu] = useState(false)
  const handleToggle = () => setOpenMenu(!openMenu);

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

  return (
    <div className={styles.container_header}>
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
    </div>
  );
}

export default HeaderMobile;