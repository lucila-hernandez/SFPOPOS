import './App.css';
import Title from './Title';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet /> 
      <Footer />
    </div>
    
  );
}

export default App;
