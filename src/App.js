import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Login /> */}
        <Routes>
        <Route path='/login'  element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
