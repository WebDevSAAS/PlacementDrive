import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SignIn } from "./components/SignIn";
import SignUp from "./components/SignUp";
import StudentDetails from "./components/StudentDetails";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/register" exact element={<SignUp />} />
          <Route path="/signed_in/student" exact element={<StudentDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
