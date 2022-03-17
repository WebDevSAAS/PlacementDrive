import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import SignUp from "./components/SignUp";
import StudentDetails from "./components/Student_Details/StudentDetails";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { AdminSignIn } from "./components/Admin/AdminSignIn"
import StudentDashboard from "./components/Student_Dashboard/StudentDashboard";
import StudentDashboardEvents from "./components/Student_Dashboard/StudentDashboardEvents"
import StudentDashboardProfile from "./components/Student_Dashboard/StudentDashboardProfile"
import StudentDashboardNotifications from "./components/Student_Dashboard/StudentDashboardNotifications"
import StudentDashboardAnalytics from "./components/Student_Dashboard/StudentDashboardAnalytics";
import StudentDashboardRecords from "./components/Student_Dashboard/StudentDashboardRecords"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin/signin" exact element={<AdminSignIn />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/register" exact element={<SignUp />} />
          <Route path="/signed_in/student" exact element={<StudentDetails />} />
          
          {/* Student Dashboard */}
          <Route path="/signed_in/student_dashboard" exact element={<StudentDashboard />} />
          <Route path="/signed_in/student_dashboard/notifications" exact element={<StudentDashboardNotifications />} />
          <Route path="/signed_in/student_dashboard/profile" exact element={<StudentDashboardProfile />} />
          <Route path="/signed_in/student_dashboard/records" exact element={<StudentDashboardRecords />} />
          <Route path="/signed_in/student_dashboard/events" exact element={<StudentDashboardEvents />} />
          <Route path="/signed_in/student_dashboard/analytics" exact element={<StudentDashboardAnalytics />} />
          {/* <Route path="/signed_out" exact element={<SignOut />} /> */}

        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
