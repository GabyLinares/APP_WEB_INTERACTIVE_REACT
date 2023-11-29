import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './views/homepage';
import { LoginPH } from './views/Users/loginPH';
// import { Register } from './pages/Register';
// import { Login } from './pages/Login';
import "./assets/css/style.css"
import React from 'react'
import { SignUpPH } from './views/Users/signupPH';
import { Catalogo } from './views/Inventory/catalog';
import { Element } from './views/Inventory/element';
import { Edition } from './views/Inventory/editable';
import { NotFound } from './views/notFound';
import { NewElem } from './views/Inventory/newelem';


//Pendejada para que corra en el mac de juanma:
//sudo chmod +x node_modules/.bin/react-scripts

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/inicio' element={<Homepage />} />
        <Route path='/login' element={<LoginPH />} />
        <Route path='/registro' element={<SignUpPH />} />
        <Route path='/catalogo' element={<Catalogo/>} />
        <Route path='/catalogo/:id' element={<Element/>} />
        <Route path='/catalogo/:id/edition' element={<Edition/>} />
        <Route path='/catalogo/new' element={<NewElem/>}/>
      </Routes>
    </Router>
  );
}

export default App;