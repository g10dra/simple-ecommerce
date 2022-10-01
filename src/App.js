import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import SpinnerComponent from './components/SpinnerComponent';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { persistUserLogin } from './redux/actions/loginActions';
import ProtectedRoute from './ProtectedRoute';
import MyOrders from './pages/MyOrders';


function App() {
  const dispatch = useDispatch();

 let userData = localStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData);
      dispatch(persistUserLogin(userData));
    }
 


  return (
    <div className="App">
      <Router>
        <SpinnerComponent />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/my-orders" element={<ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
