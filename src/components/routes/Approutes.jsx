

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignInPage from '../Signupages/SignUpPage';
import LandingPage from '../Landingpage/Landingpage';
import EmailLoginForm from '../Loginpages/Loginpage';
import DashboardPage from '../Dashboard/Dashboard';
import UserPage from '../User-Dashboard/Userpage';
import ProdcuctPage from '../BusinessUnder-Navlinks/Products/Product';
import ProfilePage from '../Uservisting-page/Products/User';

const AppRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/login" element={<EmailLoginForm />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/Userpage" element={<UserPage />} />
      <Route path="/Product" element={<ProdcuctPage />} />
            <Route path="/User-product" element={<ProfilePage />} />




    </Routes>

  );
};

export default AppRoutes;




