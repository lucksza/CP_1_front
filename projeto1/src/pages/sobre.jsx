import sportsStoreImage from '../assets/sobre.png';

function Sobre() {
  return (
    <div className="sobre-container">
      <img src={sportsStoreImage} alt="Loja de Esportes" />
      <p>
        Nossa loja de esportes foi criada com a missão de oferecer aos nossos clientes o melhor em produtos esportivos de alta qualidade. 
        Desde calçados para corrida até equipamentos para esportes de alto desempenho, estamos comprometidos em ajudar atletas, amadores e profissionais, a alcançarem seus objetivos.
        <br /><br />
        Com mais de 10 anos de experiência no mercado, nossa equipe é apaixonada por esportes e dedica-se a fornecer um atendimento de excelência. 
        Trabalhamos com as principais marcas do setor e garantimos que cada item oferecido em nossa loja foi selecionado para proporcionar conforto, desempenho e durabilidade.
      </p>
    </div>
  );
}

export default Sobre;
