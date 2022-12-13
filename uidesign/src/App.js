import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from './pages/Shop';
import { SingleProduct } from './pages/SingleProduct';
import { Register } from './pages/Register';
import { SignIn } from './pages/SignIn';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/product' element={<SingleProduct/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
