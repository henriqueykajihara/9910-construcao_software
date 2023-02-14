import React, { useState } from "react";
import $ from "jquery";
import "./esqueceuSenha.css";
import logo from "../../../img/logo/logo-desktop.png";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../utils/api";
import Toast from "../../../components/Toast/toast";

export default function EsqueceuSenha(props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await forgotPassword({ email });
      setMessage("Redefinição de senha solicitada com sucesso!");
      setTimeout(() => props.history.push("/home"), 6000);
    } catch (e) {
      setMessage("Falha ao solicitar redefinição!");
    }
    $(".toast").toast("show");
  };

  return (
    <>
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
          <h6 className="h6 mb-3 font-weight-normal d-flex justify-content-center">
            Preencha para solicitar a redefinição de senha.
          </h6>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
            autoFocus
          />
          <button
            className="btn btn-lg btn-primary btn-block mt-2"
            type="submit"
          >
            Solicitar Redefinição
          </button>
        </form>
      </div>
      <Toast message={message} />
    </>
  );
}
