// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignInPage from '../src/components/Signupages/SignUpPage';
// import LandingPage from '../src/components/Landingpage/Landingpage';
// import EmailLoginForm from '../src/components/Loginpages/Loginpage';
// import DashboardPage from './components/Dashboard/Dashboard';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signin" element={<SignInPage />} />
//         <Route path="/login" element={<EmailLoginForm />} />
//         <Route path="/dashboard" element={<DashboardPage />} />


//       </Routes>
//     </Router>
//   );
// };

// export default App;
///Backup s top



import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../src/components/routes/Approutes';
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;





