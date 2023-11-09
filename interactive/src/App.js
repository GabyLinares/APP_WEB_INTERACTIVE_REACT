import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './views/homepage';
import { LoginPH } from './views/Users/loginPH';
// import { Register } from './pages/Register';
// import { Login } from './pages/Login';
import "./assets/css/style.css"
import React from 'react'


function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<LoginPH />} />
        <Route path='/inicio' element={<LoginPH />} />
        <Route path='/login' element={<LoginPH />} />
        {/* <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;