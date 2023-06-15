import styles from "../styles/About.module.css";
import AboutImg from "../assets/Sobre.png";

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
            A TOK CONCEITO é uma empresa catarinense que se de
            dica a trazer conforto e elegância para residências e empre
            sas através de produtos de alta qualidade. Especializados em Cortinas, Per
            sianas, Pingentes, Almofadas e Roupas de Cama, atuamos no mercado de cortinas e
            persianas no Paraná.
          </p>

          <p className={styles.text}>
            Nossa equipe comercial é altamente capacitada para oferecer soluções modernas e adequadas às necessidades de cada cliente, garantindo sempre a satisfação e a ótima experiência que temos sido reconhecidos pelos nossos clientes. Trabalhamos com produtos 
            comprovadamente de alta qualidade e primamos
            por oferecer atendimento profissional e eficiente a todos 
            os nossos clientes, sejam eles domésticos ou corporativos.
          </p>
        </div>
      </section>
    </>
  )
}

export default About