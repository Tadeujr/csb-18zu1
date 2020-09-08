import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
//import logodotei from '../../assets/imagens/logodotei.png'; <img src={logodotei} alt="Logo adotei" />
// para mudar o backgrou vai no global
import { FiLogIn } from "react-icons/fi";
import LoginFacebook from "../../util/LoginFacebook";
import LoginGoogle from "../../util/LoginGoogle";

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <form>
          <h1>Login Adotei</h1>
          <input placeholder="Login"></input>
          <input placeholder="Senha" type="password"></input>
          <Link className="button" to="/adocao">
            {" "}
            Entrar
          </Link>

          <Link to="/adocao">
            <LoginFacebook />
          </Link>
          <Link className="fa fa-google" to="/adocao">
            <LoginGoogle />
          </Link>

          <Link className=".back-link" to="/registeruser">
            <FiLogIn size={16} color="black" /> Cadastrar
          </Link>
        </form>
      </section>
    </div>
  );
}
//flex-direction: column;
//<button className="button" type='submit'>Entrar</button>
