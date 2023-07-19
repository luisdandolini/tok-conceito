import styles from "../styles/Benefits.module.css";
import Truck from "../assets/truck.svg";
import Award from "../assets/award.svg";
import Professional from '../assets/Frame 100.svg'
import Service from '../assets/Frame 98.svg'
import Product from '../assets/Frame 99.svg'
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import BenefitsMobile from "./mobile/BenefitsMobile";

const Benefits = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <BenefitsMobile />;
  }

  return(
    <section className={styles.benefits}>
      <div className={styles.container_benefits}>
        <div className={styles.container_father_benefits}>
          <div className={styles.container_first}>
            <div className={styles.content}>
              <img src={Award} alt="" />
              <div>
                <p className={styles.title}>Material de alta qualidade</p>
              </div>
            </div>

            <div className={styles.content}>
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
        </div>
      </div>
    </section>
  )
}

export default Benefits;