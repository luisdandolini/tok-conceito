import { useState } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);  
  const [showModalError, setShowModalError] = useState(false);  

  function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || message === '') {
      setShowModalError(true);  
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
      setShowModal(true); 
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  function handlePhoneChange(e) {
    const value = e.target.value;
    if (!isNaN(value)) {
        setPhone(value);
    }
}

  return(
    <section className={styles.footer} id="contact">
      <div>
        <p className={styles.title}>Entre em contato!</p>
        <p className={styles.text}>
          Preencha o formulário ao lado para solicitar um orçamento ou fazer um pedido. 
          Nossa equipe entrará em contato o mais breve possível para atendê-lo da melhor forma.
        </p>
      </div>
      
      <form onSubmit={sendEmail}>
        <div className={styles.container_inputs}>
          <div className={styles.container_mobile}>
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
          <div className={styles.container_mobile}>
            <input 
              className={styles.input} 
              type="tel" 
              placeholder="Telefone"
              onChange={handlePhoneChange}
              value={phone}
            />
            <input className={styles.input} type="text" placeholder="Assunto"/>
          </div>
          <div className={styles.container_mobile}>
            <textarea 
              className={styles.input_mensage} 
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className={styles.container_button_mobile}>
            <button 
              className={styles.send}
              type="submit"
              value="Enviar"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Email enviado com sucesso!</h2>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}

      {showModalError && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Por favor, preencha todos os campos.</h2>
            <button onClick={() => setShowModalError(false)}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact