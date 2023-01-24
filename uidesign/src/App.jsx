import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import { Shop } from './pages/Shop';
import { SingleProduct } from './pages/SingleProduct';
import { Register } from './pages/Register';
import { SignIn } from './pages/SignIn';
import { Cart } from './pages/Cart';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop/:category' element={<Shop/>} />
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
