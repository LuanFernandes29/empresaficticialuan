
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contato" element={<Contato />}></Route>
          <Route path="/Sobre" element={<Sobre />}></Route>
          <Route path="*" element={<h1>Página não encontrada</h1>}></Route>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
