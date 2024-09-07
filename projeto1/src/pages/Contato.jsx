import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importa ícones de redes sociais

function Contato() {
  return (
    <div className="contato-container">
      <h2>Contato</h2>
      <p>Entre em contato conosco através das nossas redes sociais ou envie-nos um e-mail.</p>
      <div className="redes-sociais">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
      <p><strong>Email:</strong> contato@esportes.com</p>
      <p><strong>Telefone:</strong> (11) 1234-5678</p>
    </div>
  );
}

export default Contato;
