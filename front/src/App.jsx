import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => <div><h2>Home</h2></div>;
const Produtos = () => <div><h2>Produtos</h2></div>;
const Sobre = () => <div><h2>Sobre</h2></div>;

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
