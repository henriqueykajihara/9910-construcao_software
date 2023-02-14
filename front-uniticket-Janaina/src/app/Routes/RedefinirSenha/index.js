import React, { useState } from "react";
import { parse } from "query-string";
import $ from "jquery";
import "./redefinirSenha.css";
import logo from "../../../img/logo/logo-desktop.png";
import { Link } from "react-router-dom";
import Toast from "../../../components/Toast/toast";
import { resetPassword } from "../../utils/api";

export default function RedefinirSenha({ history, location }) {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const resetToken = parse(location.search).reset_token;
    try {
      await resetPassword({ password, passwordConfirmation }, resetToken);
      setMessage("Senha redefinida com sucesso.");
      setTimeout(() => history.push("/login"), 6000);
    } catch (e) {
      setMessage(e.response.data.error);
    }
    $(".toast").toast("show");
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="form-signin">
        <Link to="/login">
          <img
            className="mb-4"
            src={logo}
            alt="Logo RU"
            width="293"
            height="62"
          />
        </Link>
        <h6 className="h6 mb-3 font-weight-normal d-flex justify-content-center">
          Preencha para redefinir a senha.
        </h6>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          id="passwordConfirmation"
          className="form-control"
          placeholder="Confirme a Senha"
          value={passwordConfirmation}
          onChange={event => setPasswordConfirmation(event.target.value)}
          required
        />
        <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">
          Redefinir Senha
        </button>
      </form>
      <Toast message={message} />
    </div>
  );
}
