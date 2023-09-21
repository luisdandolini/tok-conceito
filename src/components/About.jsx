import styles from "../styles/About.module.css";
import AboutImg from "../assets/People.jpg";

const About = () => {
  return(
    <>
      {
        window.innerWidth < 780 ?  <h1 className={styles.title_about}>Sobre nós</h1> : <></>
      }
      <section className={styles.about} id="about">
        <img className={styles.img} src={AboutImg} alt="" />

        <div>
          {
            window.innerWidth > 780 ?  <p className={styles.title}>Sobre nós</p> : <></>
          }

          <p className={styles.text_bottom}>
            Na Tok Conceito, somos especialistas em cortinas, persianas, tapetes e enxovais personalizados em Palhoça. Com uma equipe experiente e apaixonada por design de interiores, oferecendo soluções sob medida para transformar sua casa ou escritório em espaços elegantes e funcionais.
            Nossa equipe altamente qualificada e experiente cuida da confecção dos produtos com atenção aos detalhes. Utilizamos materiais de alta qualidade para garantir durabilidade e estética.
          </p>

          <p className={styles.text}>
            Nossa prioridade é a satisfação do cliente. Trabalhamos para fornecer um atendimento personalizado, produtos de qualidade excepcional e resultados que superem suas expectativas.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
