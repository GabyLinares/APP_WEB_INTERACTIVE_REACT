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
import { UserMPH } from './views/Admin/userManagement';
import { UserMPHedit } from './views/Admin/userMEdit';
import { FAQ } from './views/Users/FAQ';
import { ContactPH } from './views/Users/contactoPH';


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
        <Route path='/usuarios' element={<UserMPH />} />
        <Route path='/usuarios-editar' element={<UserMPHedit />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/contacto' element={<ContactPH />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;