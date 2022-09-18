import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import SpinnerComponent from './components/SpinnerComponent';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <SpinnerComponent /> 
        <Header />
        
        <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />


      
        </Routes>  
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
