function Produtos() {
    const produtos = [
      { id: 1, nome: 'Tênis de Corrida', descricao: 'Tênis confortável para corrida.', preco: 'R$ 299,00' },
      { id: 2, nome: 'Bola de Futebol', descricao: 'Bola oficial de futebol.', preco: 'R$ 99,00' },
      { id: 3, nome: 'Camiseta Esportiva', descricao: 'Camiseta leve e confortável.', preco: 'R$ 59,00' },
    ];
  
    return (
      <div>
        <h2>Produtos</h2>
        <div className="produtos-grid">
          {produtos.map(produto => (
            <div key={produto.id} className="produto-card">
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <p><strong>{produto.preco}</strong></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Produtos;
  