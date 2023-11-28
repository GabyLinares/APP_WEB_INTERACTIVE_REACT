import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    confirmPass: '',
    nombre: '',
    apellido: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Requerimientos de contraseña
    const { pass, confirmPass } = formData;
    const isPasswordValid = validatePassword(pass);
    const doPasswordsMatch = pass === confirmPass;

    if (!isPasswordValid) {
      alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.');
      return;
    }

    if (!doPasswordsMatch) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    console.log('Form data submitted:', formData);
    localStorage.setItem('userData', JSON.stringify(formData));
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="full-wrapper">
      <div className="header-form">
        <h3 className="descripcion-barra">Bienvenid@ a Interactive Light Mosaico</h3>
      </div>
      <form className="signup">
        <div className="input-group-signup">
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              placeholder="ejemplo@email.com"
              className="input-signup"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="pass">
            Contraseña
            <input
              id="pass"
              type="password"
              className="input-signup"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="confirmPass">
            Confirma tu contraseña
            <input
              id="confirmPass"
              type="password"
              className="input-signup"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="nombre">
            Nombre
            <input
              id="nombre"
              type="text"
              className="input-signup"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="apellido">
            Apellido
            <input
              id="apellido"
              type="text"
              className="input-signup"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Registrarse
        </button>
      </form>
      <p className="under-form">
        Ya tienes cuenta? <a href="login" className="links-bottom">Ingresa</a>
      </p>
    </div>
  );
};
