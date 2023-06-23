import whatsImage from '../assets/whats.svg';

export default function WhatsApp() {
  const whatsAppNumber = "5548991918407";
  const message = "Olá!";
  
  return (
    <div style={{ position: 'fixed', bottom: '5px', right: '0px', zIndex: '999' }}>
      <a href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`}>
        <img src={whatsImage} alt="WhatsApp" style={{ height: '90px' }}/>
      </a>
    </div>
  )
}
