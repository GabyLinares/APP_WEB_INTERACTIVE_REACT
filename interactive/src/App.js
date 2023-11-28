import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './views/homepage';
import { LoginPH } from './views/Users/loginPH';
import { DashboardPH } from './views/Admin/dashboardPH';
import { EventRegistryPH } from './views/Admin/eventRegistryPH';
// import { Login } from './pages/Login';
import "./assets/css/style.css"
import React from 'react'
import { SignUpPH } from './views/Users/signupPH';
import { LocationMPH } from './views/Admin/locationManagementPH';


function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/inicio' element={<Homepage />} />
        <Route path='/login' element={<LoginPH />} />
        <Route path='/registro' element={<SignUpPH />} />
        <Route path='/dashboard' element={<DashboardPH />} />
        <Route path='/registro-eventos' element={<EventRegistryPH />} />
        <Route path='/gestion-espacios' element={<LocationMPH />} />
      </Routes>
    </Router>
  );
}

export default App;