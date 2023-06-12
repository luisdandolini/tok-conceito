import { useState } from "react";
import styles from "../styles/Products.module.css";
import Americana from "../assets/cortinas/prega-americana.jpeg";
import Macho from "../assets/cortinas/prega-macho.jpeg";
import Wave from "../assets/cortinas/pregra-wave.jpeg";
import Xale from "../assets/cortinas/Prega-Xale.jpg";
import Double from "../assets/persianas/double-vision.jpeg";
import Horizontal from "../assets/persianas/horizontal.jpeg";
import Rolo from "../assets/persianas/rolo.jpeg";
import Romana from "../assets/persianas/romana.png";

const Products = () => {
  const [product, setProduct] = useState("Cortinas");

  return(
    <section>
      <div className={styles.container_buttons}>
        <button 
        onClick={() => setProduct("Cortinas")}
        className={product === "Cortinas" ? styles.selected : ''}>
          Cortinas
        </button>
        <button 
        onClick={() => setProduct("Persianas")}
        className={product === "Persianas" ? styles.selected : ''}>
          Persianas
        </button>
        <button 
        onClick={() => setProduct("Tapetes")}
        className={product === "Tapetes" ? styles.selected : ''}>
          Tapetes
        </button>
        <button 
        onClick={() => setProduct("Enxovais")}
        className={product === "Enxovais" ? styles.selected : ''}>
          Enxovais
        </button>
      </div>

      {
        product === "Cortinas" && 
        <div className={styles.container_images}>
          <div className={styles.imgs}>
            <div className={styles.img}>
              <img src={Americana} alt="Cortina Azul" />
              <span className={styles.imgText}>Prega Americana</span>
            </div>
            <div className={styles.img}>
              <img src={Macho} alt="Cortina Marrom" />
              <span className={styles.imgText}>Prega Macho</span>
            </div>
          </div>
          <div className={styles.imgs}>
            <div className={styles.img}>
              <img src={Wave} alt="Cortina Azul" />
              <span className={styles.imgText}>Prega Wave</span>
            </div>
            <div className={styles.img}>
              <img src={Xale} alt="Cortina Marrom" />
              <span className={styles.imgText}>Xale</span>
            </div>
          </div>
        </div>
      }

      {
        product === "Persianas" && 
        <div className={styles.container_images}>
          <div className={styles.imgs}>
            <div className={styles.img}>
              <img src={Double} alt="Cortina Azul" />
              <span className={styles.imgText}>Double Vision</span>
            </div>
            <div className={styles.img}>
              <img src={Horizontal} alt="Cortina Marrom" />
              <span className={styles.imgText}>Horizontal</span>
            </div>
          </div>
          <div className={styles.imgs}>
            <div className={styles.img}>
              <img src={Rolo} alt="Cortina Azul" />
              <span className={styles.imgText}>Rolô</span>
            </div>
            <div className={styles.img}>
              <img src={Romana} alt="Cortina Marrom" />
              <span className={styles.imgText}>Romana</span>
            </div>
          </div>
        </div>
      }

      {
        product === "Tapetes" && 
        <div>
          Tapetes
        </div>
      }

      {
        product === "Enxovais" && 
        <div>
          Enxovais
        </div>
      }   

      <div className={styles.details_bottom}></div>
    </section>
  )
}

export default Products