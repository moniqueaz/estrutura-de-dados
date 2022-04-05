import {
  BrowserRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Template from 'templates';
import SwitchRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Template>
          <>
            <GlobalStyles />
            <SwitchRoutes />
          </>
        </Template>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
