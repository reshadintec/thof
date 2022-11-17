import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router >
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/users" element={<UserList/>}></Route>
          <Route path="/products" element={<Products/>}> </Route>
          <Route path="/user/:userId" element={<User/>}> </Route>
          <Route path="/newUser" element={<NewUser/>}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
