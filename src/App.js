import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import StudentDetailsForm from "./components/StudentDetailsForm/StudentDetailsForm";
import Footer from "./components/Footer/Footer";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
  componentWillMount() {
    this.callAPI();
  }

  // function App() {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route
              path="/signed_in/student"
              exact
              element={<StudentDetailsForm />}
            />
          </Routes>
          <Footer />
        </div>
        {/* <p>{this.state.apiResponse}</p> */}
      </Router>
    );
  }
}
export default App;


