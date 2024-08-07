import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import StaffProfile from './StaffProfile';
import Dashboard from './Dashboard';
import RegionProfile from './RegionProfile';
import JobTitleProfile from './JobTitleProfile';
import SchoolProfile from './Schools';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/for-michigan-staff-directory-frontend">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/staff-information" element={<StaffProfile />} />
      <Route path="/region-information" element={<RegionProfile />} />
      <Route path="/roles-information" element={<JobTitleProfile />} />
      <Route path="/school-information" element={<SchoolProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
