import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from './pages/Shop';
import { SingleProduct } from './pages/SingleProduct';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/product' element={<SingleProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
