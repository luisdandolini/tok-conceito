import { useRef, useEffect } from 'react';
import styles from '../../styles/BenefitsMobile.module.css';
import Vector from "../../assets/Vector.svg";
import Truck from "../../assets/truck.svg";
import Award from "../../assets/award.svg";

const BenefitsMobile = () => {
  const centeredContentRef = useRef(null); // Cria a referência

  useEffect(() => {
    const container = centeredContentRef.current.parentNode;
    const scrollLeft = centeredContentRef.current.offsetLeft - (container.offsetWidth / 2) + (centeredContentRef.current.offsetWidth / 2);
    container.scrollLeft = scrollLeft;
  }, []);

  return(
    <section className={styles.bg}>
      <div className={styles.container_benefits}>
        <div className={styles.content}>
          <img src={Award} alt="" />
          <div>
            <p className={styles.title}>Alta qualidade</p>
            <p className={styles.text}>O material é resistente</p>
          </div>
        </div>

        <div className={styles.content} ref={centeredContentRef}>
          <img src={Vector} alt="" />
          <div>
            <p className={styles.title}>Garantia extendida</p>
            <p className={styles.text}>de até dois anos</p>
          </div>
        </div>

        <div className={styles.content}>
          <img src={Truck} alt="" />
          <div>
            <p className={styles.title}>Frete grátis</p>
            <p className={styles.text}>Pedidos acima de R$3000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsMobile
