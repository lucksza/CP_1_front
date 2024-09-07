function Produtos() {
    const sapatos = [
      { id: 1, nome: 'Tênis de Corrida', descricao: 'Tênis confortável para corrida.', preco: 'R$ 299,00' },
      { id: 2, nome: 'Chuteira', descricao: 'Chuteira leve e resistente.', preco: 'R$ 199,00' },
    ];
  
    const roupas = [
      { id: 1, nome: 'Camiseta Esportiva', descricao: 'Camiseta leve e confortável.', preco: 'R$ 59,00' },
      { id: 2, nome: 'Jaqueta Esportiva', descricao: 'Jaqueta para treinos em dias frios.', preco: 'R$ 149,00' },
    ];
  
    const bolas = [
      { id: 1, nome: 'Bola de Futebol', descricao: 'Bola oficial de futebol.', preco: 'R$ 99,00' },
      { id: 2, nome: 'Bola de Basquete', descricao: 'Bola para partidas de basquete.', preco: 'R$ 119,00' },
    ];
  
    return (
      <div>
        <h2>Produtos</h2>
  
        <div className="categoria">
          <h3>Sapatos</h3>
          <div className="produtos-grid">
            {sapatos.map(produto => (
              <div key={produto.id} className="produto-card">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p><strong>{produto.preco}</strong></p>
                <button className="comprar-btn">Comprar</button>
              </div>
            ))}
          </div>
        </div>
  
        <div className="categoria">
          <h3>Roupas</h3>
          <div className="produtos-grid">
            {roupas.map(produto => (
              <div key={produto.id} className="produto-card">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p><strong>{produto.preco}</strong></p>
                <button className="comprar-btn">Comprar</button>
              </div>
            ))}
          </div>
        </div>
  
        <div className="categoria">
          <h3>Bolas</h3>
          <div className="produtos-grid">
            {bolas.map(produto => (
              <div key={produto.id} className="produto-card">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p><strong>{produto.preco}</strong></p>
                <button className="comprar-btn">Comprar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Produtos;
  