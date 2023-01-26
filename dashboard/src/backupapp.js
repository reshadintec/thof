import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/productSingle/Product";
import ProductNew from "./pages/productNew/ProductNew";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  if (!admin) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    )
  } else {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/add-product" element={<ProductNew />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
