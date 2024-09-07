import homeImage from '../assets/home.png'; 
function Home() {
  return (
    <div className="home-container">
      <h2>Bem-vindo à nossa Loja de Esportes</h2>
      <img src={homeImage} alt="Loja de Esportes" className="home-image" />
      <p>
        Explore uma vasta gama de produtos esportivos, desde tênis de corrida, roupas esportivas e acessórios até bolas para diferentes modalidades.
        Estamos aqui para oferecer tudo o que você precisa para alcançar suas metas esportivas!
      </p>
    </div>
  );
}

export default Home;
