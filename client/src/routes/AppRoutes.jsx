import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SubmitStartup from '../pages/SubmitStartup';
import Dashboard from '../pages/Dashboard';
import Report from '../pages/Report';
import StartupDetails from '../pages/StartupDetails';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Navbar />
          <main className="w-full flex-grow p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/submit" element={<SubmitStartup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/report/:id" element={<Report />} />
              <Route path="/startup/:id" element={<StartupDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
