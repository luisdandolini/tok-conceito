import styles from "../styles/Contact.module.css";

const Contact = () => {
  return(
    <section className={styles.footer}>
      <div>
        <p className={styles.title}>Entre em contato!</p>
        <p className={styles.text}>
          Preencha o formulário ao lado para solicitar um orçamento ou fazer um pedido. 
          Nossa equipe entrará em contato o mais breve possível para atendê-lo da melhor forma.
        </p>
      </div>
      <div className={styles.container_inputs}>
        <div>
          <input className={styles.input} type="text" placeholder="Nome"/>
          <input className={styles.input} type="email" placeholder="Email"/>
        </div>
        <div>
          <input className={styles.input} type="tel" placeholder="Telefone"/>
          <input className={styles.input} type="text" placeholder="Assunto"/>
        </div>
        <div>
          <input className={styles.input_mensage} type="text" placeholder="Mensagem "/>
        </div>
        <button className={styles.send}>Enviar</button>
      </div>
    </section>
  )
}

export default Contact