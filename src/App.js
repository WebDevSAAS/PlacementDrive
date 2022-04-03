import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import SignUp from "./components/SignUp";
import StudentDetails from "./components/Student_Details/StudentDetails";
import StudentClass10Records from "./components/Student_Dashboard/StudentRecords/Class10Records";
import StudentClass12Records from "./components/Student_Dashboard/StudentRecords/Class12Records";
import StudentBacklogsRecords from "./components/Student_Dashboard/StudentRecords/BacklogsRecords";
import StudentDiplomaRecords from "./components/Student_Dashboard/StudentRecords/DiplomaRecords";
import StudentGraduationRecords from "./components/Student_Dashboard/StudentRecords/GraduationRecords";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import { AdminSignIn } from "./components/Admin/AdminSignIn"
import StudentDashboard from "./components/Student_Dashboard/StudentDashboard";
import StudentDashboardRecords from "./components/Student_Dashboard/StudentDashboardRecords";
import StudentDashboardProfile from "./components/Student_Dashboard/StudentDashboardProfile"
import StudentDashboardEvents from "./components/Student_Dashboard/StudentDashboardEvents"

import StudentDashboardNotifications from "./components/Student_Dashboard/StudentDashboardNotifications"
import StudentDashboardAnalytics from "./components/Student_Dashboard/StudentDashboardAnalytics"
import AdminDashboard from "./components/Admin/AdminDashboard"

import AdminDashboardNotifications from "./components/Admin/DashboardNotifications"
import AdminDashboardRecords from "./components/Admin/DashboardRecords"
import AdminDashboardAddEvent from "./components/Admin/DashboardAddEvent"
import AdminDashboardCompanyReports from "./components/Admin/DashboardCompanyReports"
import AdminDashboardStudentReports from "./components/Admin/DashboardStudentReports"
import AdminDashboardEvents from "./components/Admin/DashboardEvents"
import { ForgotPassword } from "./components/ForgotPassword"



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/register" exact element={<SignUp />} />
          <Route path="/ForgotPassword" exact element={<ForgotPassword />} />
          <Route path="/signed_in/student" exact element={<StudentDetails />} />
          
          
          {/* Student Dashboard */}
          <Route path="/signed_in/student_dashboard" exact element={<StudentDashboard />} />

          <Route path="/signed_in/student_dashboard/notifications" exact element={<StudentDashboardNotifications />} />

          <Route path="/signed_in/student_dashboard/profile" exact element={<StudentDashboardProfile />} />
          
          <Route path="/signed_in/student_dashboard/records" exact element={<StudentDashboardRecords />} /> 
          <Route path="/signed_in/student_dashboard/records/class10" exact element={<StudentClass10Records />} /> 
          <Route path="/signed_in/student_dashboard/records/class12" exact element={<StudentClass12Records />} />
          <Route path="/signed_in/student_dashboard/records/graduation" exact element={<StudentGraduationRecords />} />
          <Route path="/signed_in/student_dashboard/records/diploma" exact element={<StudentDiplomaRecords />} />
          <Route path="/signed_in/student_dashboard/records/backlogs" exact element={<StudentBacklogsRecords />} />   
          <Route path="/signed_in/student_dashboard/events" exact element={<StudentDashboardEvents />} /> 

          <Route path="/signed_in/student_dashboard/events" exact element={<StudentDashboardEvents />} />
          
          {/* <Route path="/signed_in/student_dashboard/events" exact element={<StudentDashboardEvents />} /> */}
          {/* <Route path="/signed_in/student_dashboard/analytics" exact element={<StudentDashboardAnalytics />} /> */}
          <Route path="/signed_in/student_dashboard/records" exact element={<StudentDashboardRecords />} />


          <Route path="/signed_in/student_dashboard/analytics" exact element={<StudentDashboardAnalytics />} />

          
          {/* Admin Dashboard */}
          <Route path="/admin/signin" exact element={<AdminSignIn />} />
          <Route path="/admin/signed_in/dashboard" exact element={<AdminDashboard />} /> 
          <Route path="/admin/signed_in/dashboard/notifications" exact element={<AdminDashboardNotifications />} />
          <Route path="/admin/signed_in/dashboard/records" exact element={<AdminDashboardRecords />} />
          <Route path="/admin/signed_in/dashboard/events" exact element={<AdminDashboardEvents />} />
          <Route path="/admin/signed_in/dashboard/add_event" exact element={<AdminDashboardAddEvent />} />
          <Route path="/admin/signed_in/dashboard/company_report" exact element={<AdminDashboardCompanyReports />} />
          <Route path="/admin/signed_in/dashboard/student_report" exact element={<AdminDashboardStudentReports />} />


        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
