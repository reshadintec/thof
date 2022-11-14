import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Products from "./pages/products/Products";

function App() {
  return (
    <Router >
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/users" elment={<UserList />}></Route>
          <Route path="/products" elment={<Products />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
