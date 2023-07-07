import { useRef, useEffect } from 'react';
import styles from '../../styles/BenefitsMobile.module.css';
import Truck from "../../assets/truck.svg";
import Award from "../../assets/award.svg";
import Professional from '../../assets/Frame 100.svg'
import Service from '../../assets/Frame 98.svg'
import Product from '../../assets/Frame 99.svg'

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
            <p className={styles.title}>Material de alta qualidade</p>
          </div>
        </div>

        <div className={styles.content} ref={centeredContentRef}>
          <img src={Professional} alt="" />
          <div>
            <p className={styles.title}>Profissionais qualificados</p>
          </div>
        </div>

        <div className={styles.content}>
          <img src={Service} alt="" />
          <div>
            <p className={styles.title}>Atendimento personalizado</p>
          </div>
        </div>

        <div className={styles.content}>
          <img src={Truck} alt="" />
          <div>
            <p className={styles.title}>Garantia extendida</p>
          </div>
        </div>

        <div className={styles.content}>
          <img src={Product} alt="" />
          <div>
            <p className={styles.title}>Produtos sob medida</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsMobile
