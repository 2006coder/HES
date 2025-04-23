import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import MissionSection from './components/MissionSection/MissionSection';
import TeamSection from './components/TeamSection/TeamSection';
import FAQSection from './components/FAQSection/FAQSection';
import SearchEnginePage from './components/SearchEnginePage/SearchEnginePage';
import HowItWorks from './components/HowItWorks/HowItWorks'; 
import WhenAndWhere from "./components/WhenAndWhere/WhenAndWhere";
import InsuranceGeneral from './components/InsuranceGeneralPage/InsuranceGeneralPage';
import EarlhamInsurance from './components/EarlhamInsurancePage/EarlhamInsurancePage';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';

const HomePage = () => (
  <div>
    <MainSection />
    <ServiceSection />
    <MissionSection />
    <TeamSection />
    <FAQSection />
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Protected Routes */}
          <Route path="/healthcare-search" element={
            <ProtectedRoute>
              <SearchEnginePage />
            </ProtectedRoute>
          } />
          
          <Route path="/how-it-works" element={
            <ProtectedRoute>
              <HowItWorks />
            </ProtectedRoute>
          } />
          
          <Route path="/when-and-where" element={
            <ProtectedRoute>
              <WhenAndWhere />
            </ProtectedRoute>
          } />
          
          <Route path="/insurance-general" element={
            <ProtectedRoute>
              <InsuranceGeneral />
            </ProtectedRoute>
          } />
          
          <Route path="/earlham-insurance" element={
            <ProtectedRoute>
              <EarlhamInsurance />
            </ProtectedRoute>
          } />
          
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
