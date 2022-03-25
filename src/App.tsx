import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from 'page/home';
import Array from 'page/array';
import Pilha from 'page/pilha';
import Fila from 'page/fila';
import Lista from 'page/lista';
import Conjunto from 'page/conjunto';
import Dicionario from 'page/dicionario';
import Recursao from 'page/recursao';
import Arvore from 'page/arvore';
import Heap from 'page/heap';
import Grafos from 'page/grafos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/array" element={<Array />}/>
        <Route path="/pilha" element={<Pilha />}/>
        <Route path="/fila" element={<Fila />}/>
        <Route path="/lista" element={<Lista />}/>
        <Route path="/conjunto" element={<Conjunto />}/>
        <Route path="/dicionario" element={<Dicionario />}/>
        <Route path="/recursao" element={<Recursao />}/>
        <Route path="/arvore" element={<Arvore />}/>
        <Route path="/heap" element={<Heap />}/>
        <Route path="/grafos" element={<Grafos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
