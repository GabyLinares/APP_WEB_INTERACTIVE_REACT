import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './views/homepage';
import { LoginPH } from './views/Users/loginPH';
// import { Register } from './pages/Register';
// import { Login } from './pages/Login';
import "./assets/css/style.css"
import React from 'react'
import { SignUpPH } from './views/Users/signupPH';


function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/inicio' element={<Homepage />} />
        <Route path='/login' element={<LoginPH />} />
        <Route path='/registro' element={<SignUpPH />} />
      </Routes>
    </Router>
  );
}

export default App;