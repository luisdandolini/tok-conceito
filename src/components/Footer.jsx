import styles from "../styles/Footer.module.css";
import Logo from '../assets/logo_mobile.png';
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Icon from '@mdi/react';
import { mdiHeart, mdiCoffee } from '@mdi/js';

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <img src={Logo} alt="" />
      <div className={styles.links}>
        <a href="https://www.instagram.com/tokconceito/" target="_blank" rel="noreferrer"><img src={Instagram} alt="" /></a>
        <a href="https://www.facebook.com/tokconceito/" target="_blank" rel="noreferrer"><img src={Facebook} alt="" /></a>
      </div>

      <div>
        <p className={styles.nexus}>© 2023 Feito com muito <Icon path={mdiHeart} size={.6} color={'red'} /> e <Icon path={mdiCoffee} size={.6} color={'white'} /> pela NexusLab®</p>
      </div>
    </footer>
  )
}

export default Footer;