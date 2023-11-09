import React from "react";

export const LoginForm = () => {
  return (
    <div class="full-wrapper">
        <div class="header-form">
            <h3 class="descripcion-barra">Bienvenid@ a Interactive Light Mosaico</h3>
        </div>
        <form class="login">
            <div class="input-group">
                <label for="email">Email<input id="email" type="email" placeholder="ejemplo@gmail.com"
                        class="edit-text input-login"></input></label>
                <label for="pass">Contraseña<input id="pass" type="password" placeholder="************"
                        class="edit-text input-login"></input></label>
                {/* <!-- <label for="remember" class="remember"><input id="remember" type="checkbox">Recuerdame</label> --> */}
            </div>
            <button type="submit"><a href="../Admin/dashboardPH.html">Ingresar</a></button>
        </form>
        <p class="under-form">No tienes cuenta? <a href="signupPH.html" class="links-bottom">Regístrate</a></p>
    </div>
  );
};