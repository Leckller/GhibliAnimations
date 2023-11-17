import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    overflow: hidden;
  }
`;
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Routes>
    </>
  );
}

export default App;
