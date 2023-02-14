import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./login.css";
import logo from "../../../img/logo/logo-desktop.png";
import { login } from "../../utils/api";
import Toast from "../../../components/Toast/toast";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await login({
        email,
        password
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.user.role);
      props.history.push("/home");
    } catch (e) {
      setMessage(e.response.data.error);
      $(".toast").toast("show");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="form-signin">
        <Link to="/home">
          <img
            className="mb-4"
            src={logo}
            alt="Logo RU"
            width="293"
            height="62"
          />
        </Link>
        <h1 className="h3 mb-3 font-weight-normal d-flex justify-content-center">
          Por favor, faça login
        </h1>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className="mb-2 d-flex justify-content-center">
          <p>
            Esqueceu sua senha? Clique <Link to="/esqueceu-senha">aqui.</Link>
          </p>
        </div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Login
        </button>
        <Link to="/criar-conta" className="btn btn-lg btn-info btn-block">
          Criar Conta
        </Link>
      </form>
      <Toast message={message} />
    </div>
  );
}
