import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

export const SignupForm = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        nombre: "",
        apellido: "",
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // You can access the form data in the 'formData' object
        console.log("Form data submitted:", formData);
    
        // Here, you can add your logic to handle the form data as needed,
        // such as saving it to local storage or performing any other actions.
    
        // For example, you can save the data to local storage:
        localStorage.setItem("signupData", JSON.stringify(formData));
      };

  return (
    <div className="full-wrapper">
      <div className="header-form">
        <h3 className="descripcion-barra">Bienvenid@ a Interactive Light Mosaico</h3>
      </div>
      <form className="signup" onChange={handleChange}>
        <div className="input-group-signup">
          <label htmlFor="email">
            Email
            <input id="email" type="email" placeholder="ejemplo@email.com" className="input-signup" />
          </label>
          <label htmlFor="pass">
            Contraseña
            <input id="pass" type="password" className="input-signup" />
          </label>
          <label htmlFor="confirmPass">
            Confirma tu contraseña
            <input id="confirmPass" type="password" className="input-signup" />
          </label>
          <label htmlFor="nombre">
            Nombre
            <input id="nombre" type="text" className="input-signup" />
          </label>
          <label htmlFor="apellido">
            Apellido
            <input id="apellido" type="text" className="input-signup" />
          </label>
          {/* <label htmlFor="remember" className="remember">
            <input id="remember" type="checkbox" />
            Recuerdame
          </label> */}
        </div>
        <button type="submit" onClick={handleSubmit}>Registrarse</button>
      </form>
      <p className="under-form">
        Ya tienes cuenta? <a href="login" className="links-bottom">Ingresa</a>
      </p>
    </div>
  );
};