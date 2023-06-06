import { useState } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_84xapi3', 'template_7jiae8q', templateParams, 'Va9st1oQUYtD-GKbX')
    .then((response) => {
      console.log("Email enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return(
    <section className={styles.footer}>
      <div>
        <p className={styles.title}>Entre em contato!</p>
        <p className={styles.text}>
          Preencha o formulário ao lado para solicitar um orçamento ou fazer um pedido. 
          Nossa equipe entrará em contato o mais breve possível para atendê-lo da melhor forma.
        </p>
      </div>
      
      <form onSubmit={sendEmail}>
        <div className={styles.container_inputs}>
          <div>
            <input 
              className={styles.input} 
              type="text" 
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input 
              className={styles.input} 
              type="email" 
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <input className={styles.input} type="tel" placeholder="Telefone"/>
            <input className={styles.input} type="text" placeholder="Assunto"/>
          </div>
          <div>
            <input 
              className={styles.input_mensage} 
              type="text" 
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <button 
            className={styles.send}
            type="submit"
            value="Enviar"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact