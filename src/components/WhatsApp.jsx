import whatsImage from '../assets/whats.svg';

export default function WhatsApp() {
  const whatsAppNumber = "5548998313958";
  const message = "Olá! Gostaria de fazer um orçamento.";
  
  return (
    <div style={{ position: 'fixed', bottom: '5px', right: '0px', zIndex: '999' }}>
      <a href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">
        <img src={whatsImage} alt="WhatsApp" style={{ height: '90px' }}/>
      </a>
    </div>
  )
}
