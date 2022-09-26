import { Header } from './components/Header/Header';

import './App.css';
import { Container } from '@mui/material';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <div>Content</div>
      </Container>
    </div>
  );
};

export default App;
