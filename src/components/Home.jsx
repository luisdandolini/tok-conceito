import styles from "../styles/Home.module.css";
import ImageFirst from "../assets/image_home1.png";
import ImageSecond from "../assets/image_home2.png";

const Home = () => {
  return(
    <section className={styles.home}>
      <div className={styles.details_top}></div>

      <div className={styles.container_content}>
        <div className={styles.content_text}>
          <h1>Sua casa ainda mais <br /> <span>acolhedora</span></h1>
          <p>Transforme sua casa em um espaço sofisticado e aconchegante com nossa ampla variedade de cortinas, persianas e almofadas.</p>
        </div>
        
        <div>
          <img className={styles.img_first} src={ImageFirst} alt="Foto do trabalho da Tok Conceito" />
          <img className={styles.img_second} src={ImageSecond} alt="Foto do trabalho da Tok Conceito" />
        </div>
      </div>

      <div className={styles.details_bottom}></div>
    </section>
  )
}

export default Home;