import styles from "../styles/Footer.module.css";
import Logo from '../assets/logo_mobile.png';
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
// import Email from "../assets/mail.svg";

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <img src={Logo} alt="" />
      <div className={styles.links}>
        <a href="https://www.instagram.com/tokconceito/" target="_blank"><img src={Instagram} alt="" /></a>
        <a href="https://www.facebook.com/tokconceito/" target="_blank"><img src={Facebook} alt="" /></a>
        {/* <img src={Email} alt="" /> */}
      </div>
    </footer>
  )
}

export default Footer;