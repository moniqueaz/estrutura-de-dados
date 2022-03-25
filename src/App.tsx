import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from 'page/home';
import Array from 'page/array';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/array" element={<Array />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
