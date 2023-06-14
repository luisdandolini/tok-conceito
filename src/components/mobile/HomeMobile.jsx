import styles from '../../styles/HomeMobile.module.css';
import Image1 from '../../assets/image_home1.png'

const HomeMobile = () => {
  return(
    <section className={styles.bg}>
      <div className={styles.container_content}>
        <h1 className={styles.title}>Sua casa ainda mais <span>acolhedora</span></h1> 
        <img className={styles.image} src={Image1} alt="" />
        <p className={styles.text}>Transforme sua casa em um espaço sofisticado e aconchegante com nossa ampla variedade de cortinas, persianas e almofadas.</p>
      </div>

      <div className={styles.details_top}></div>
      <div className={styles.details_bottom}></div>
    </section>
  )
}

export default HomeMobile