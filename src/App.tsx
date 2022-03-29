import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from 'page';
import Array from 'page/Array';
import Pilha from 'page/Pilha';
import Fila from 'page/Fila';
import Lista from 'page/Lista';
import Conjunto from 'page/Conjunto';
import Dicionario from 'page/Dicionario';
import Recursao from 'page/Recursao';
import Arvore from 'page/Arvore';
import Heap from 'page/Heap';
import Grafos from 'page/Grafos';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Template from 'templates';

function App() {
  return (
    <Template>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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
      </ThemeProvider>
    </Template>
  );
}

export default App;
