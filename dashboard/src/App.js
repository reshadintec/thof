import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div >
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <div className="content">Content
          <p>Hello <br></br></p>
        </div>
      </div>
    </div>
  );
}

export default App;
