
import './App.css';
import Login from './screens/Auth/Login.jsx';

import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import ForgotPassword from './screens/Auth/ForgotPassword.jsx';
import Signup from './screens/Auth/Signup.jsx';
import Dashboard from './screens/dashboard/Dashboard.jsx';
import InquiryForm from './screens/InquiryForm/inquiry_form.jsx';
import StuProfile from './screens/StuProfile.jsx';
import ApplicationForm from './screens/Application_form.jsx';
import StuPayments from './screens/StuPayments.jsx';
import StuProfileEdit from './screens/StuProfileEdit.jsx';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path="/inquiry" element={<InquiryForm />} />
        <Route path='/studentprofile' element={<StuProfile />} />
        <Route path="/studentapplication" element={<ApplicationForm />} />
        <Route path="/studentpayments" element={<StuPayments />} />
        <Route path="/studentprofileedit" element={<StuProfileEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
