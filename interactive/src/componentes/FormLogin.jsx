import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
      const userDataObject = JSON.parse(savedUserData);
      console.log("Saved userData:", userDataObject);

      if ("email" in userDataObject && "pass" in userDataObject) {
        const { email: savedEmail, pass: savedPassword } = userDataObject;
        console.log("Email esperado:", savedEmail);
        console.log("Contraseña esperada:", savedPassword);

        if (
          loginData.email === savedEmail &&
          loginData.pass === savedPassword
        ) {
          console.log("Login exitoso!");
          navigate("/registro");
        } else {
          console.log("Login fallido. Credenciales invalidas.");
          console.log("Email usado:", loginData.email);
          console.log("Contraseña usada:", loginData.pass);
        }
      } else {
        console.log("El formato de las credenciales no es válido.");
      }
    } else {
      console.log("No hay credenciales registradas, por favor regístrese");
    }
  };

  return (
    <div className="full-wrapper">
      <div className="header-form">
        <h3 className="descripcion-barra">
          Bienvenid@ a Interactive Light Mosaico
        </h3>
      </div>
      <form className="login" onSubmit={handleLoginSubmit}>
        <div className="input-group">
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              placeholder="ejemplo@gmail.com"
              className="edit-text input-login"
              onChange={handleLoginChange}
            />
          </label>
          <label htmlFor="pass">
            Contraseña
            <input
              id="pass"
              type="password"
              placeholder="************"
              className="edit-text input-login"
              onChange={handleLoginChange}
            />
          </label>
          {/* <!-- <label for="remember" class="remember"><input id="remember" type="checkbox">Recuerdame</label> --> */}
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <p className="under-form">
        No tienes cuenta?{" "}
        <a href="registro" className="links-bottom">
          Regístrate
        </a>
      </p>
    </div>
  );
};
