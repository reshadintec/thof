import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/productSingle/Product";
import ProductNew from "./pages/productNew/ProductNew";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <>
            <Navbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <ProductNew />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;