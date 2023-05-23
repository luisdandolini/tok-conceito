import { useState } from "react";
import styles from "../styles/Products.module.css";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";

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
              <img src={Product1} alt="Cortina Azul" />
              <span className={styles.imgText}>Prega Americana</span>
            </div>
            <div className={styles.img}>
              <img src={Product2} alt="Cortina Marrom" />
              <span className={styles.imgText}>Prega Macho</span>
            </div>
          </div>
          <div className={styles.imgs}>
            <div className={styles.img}>
              <img src={Product3} alt="Cortina Azul" />
              <span className={styles.imgText}>Prega Wave</span>
            </div>
            <div className={styles.img}>
              <img src={Product4} alt="Cortina Marrom" />
              <span className={styles.imgText}>Prega Ilhós</span>
            </div>
          </div>
        </div>
      }

      {
        product === "Persianas" && 
        <div>
          Persianas
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