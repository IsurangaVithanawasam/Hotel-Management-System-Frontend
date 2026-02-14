import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
