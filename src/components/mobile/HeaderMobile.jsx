import  { useState } from 'react';
import styles from '../../styles/HeaderMobile.module.css';
import Logo from '../../assets/Logo.svg';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function HeaderMobile() {
  const [openMenu, setOpenMenu] = useState(false)
  const handleToggle = () => setOpenMenu(!openMenu);

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
                    <li><a>Home</a></li>
                    <li><a>Produtos</a></li>
                    <li><a>Depoimentos</a></li>
                    <li><a>Sobre nós</a></li>
                    <li><a>Contato</a></li>
                  </ul>
                  <div className={styles.container_button}>
                    <button>Fale conosco</button>
                  </div>
                </div>
                <div className={styles.details_top}></div>
                <div className={styles.details_bottom}></div>
              </>
            }
          </div>
        </div>
    </div>
  );
}

export default HeaderMobile;