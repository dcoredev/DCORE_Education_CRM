
// import './App.css';
// import Login from './screens/Auth/Login.jsx';

// import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
// import ForgotPassword from './screens/Auth/ForgotPassword.jsx';
// import Signup from './screens/Auth/Signup.jsx';
// import Dashboard from './screens/dashboard/Dashboard.jsx';
// import InquiryForm from './screens/InquiryForm/inquiry_form.jsx';
// import StuProfile from './screens/Student/StuProfile.jsx';
// import ApplicationForm from './screens/Student/Application_form.jsx';
// import StuPayments from './screens/Student/StuPayments.jsx';
// import StuProfileEdit from './screens/Student/StuProfileEdit.jsx';
// import AdminProfile from './screens/Admin/AdminProfile.jsx';
// import AdminInquiries from './screens/Admin/AdminInquiries.jsx';
// import Users from './screens/Admin/Users.jsx';
// import AdminAdmissions from './screens/Admin/AdminAdmissions.jsx';
// import AdminPayments from './screens/Admin/AdminPayments.jsx';

// function App() {
//   return (
    
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/ForgotPassword" element={<ForgotPassword />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/ForgotPassword" element={<ForgotPassword />} />
//         <Route path='/Dashboard' element={<Dashboard />} />
//         <Route path="/inquiry" element={<InquiryForm />} />
//         <Route path='/studentprofile' element={<StuProfile />} />
//         <Route path="/studentapplication" element={<ApplicationForm />} />
//         <Route path="/studentpayments" element={<StuPayments />} />
//         <Route path="/studentprofileedit" element={<StuProfileEdit />} />
//         <Route path="/admin-profile" element={<AdminProfile />} />
//         <Route path="/admin-inquiries" element={<AdminInquiries />} />
//         <Route path="/admin/users" element={<Users />} />
//         <Route path="/admin-admissions" element={<AdminAdmissions />} />
//         <Route path="/admin-payments" element={<AdminPayments />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// 🔐 Auth Screens
import Login from "./screens/Auth/Login.jsx";
import Signup from "./screens/Auth/Signup.jsx";
import ForgotPassword from "./screens/Auth/ForgotPassword.jsx";

// 🎓 Student Screens
import StuProfile from "./screens/Student/StuProfile.jsx";
import StuProfileEdit from "./screens/Student/StuProfileEdit.jsx";
import ApplicationForm from "./screens/Student/Application_form.jsx";
import StuPayments from "./screens/Student/StuPayments.jsx";
import Dashboard from "./screens/dashboard/Dashboard.jsx";
import InquiryForm from "./screens/InquiryForm/inquiry_form.jsx";

// 🧑‍💼 Admin Screens
import AdminProfile from "./screens/Admin/AdminProfile.jsx";
import AdminInquiries from "./screens/Admin/AdminInquiries.jsx";
import Users from "./screens/Admin/Users.jsx";
import AdminAdmissions from "./screens/Admin/AdminAdmissions.jsx";
import AdminPayments from "./screens/Admin/AdminPayments.jsx";
import AdminReports from "./screens/Admin/Reports.jsx";

// ✅ Protected Route
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const userRole = localStorage.getItem("role");

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Student Routes */}
        <Route
          path="/studentprofile"
          element={
            <ProtectedRoute>
              <StuProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studentprofileedit"
          element={
            <ProtectedRoute>
              <StuProfileEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studentapplication"
          element={
            <ProtectedRoute>
              <ApplicationForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studentpayments"
          element={
            <ProtectedRoute>
              <StuPayments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inquiry"
          element={
            <ProtectedRoute>
              <InquiryForm />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin-profile"
          element={
            <ProtectedRoute>
              <AdminProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-inquiries"
          element={
            <ProtectedRoute>
              <AdminInquiries />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-admissions"
          element={
            <ProtectedRoute>
              <AdminAdmissions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-payments"
          element={
            <ProtectedRoute>
              <AdminPayments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-reports"
          element={
            <ProtectedRoute>
              <AdminReports />
            </ProtectedRoute>
          }
        />

        {/* Default Role-Based Redirect */}
        <Route
          path="*"
          element={
            userRole === "Admin" ? (
              <Navigate to="/admin-profile" />
            ) : userRole === "Student" ? (
              <Navigate to="/studentprofile" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
