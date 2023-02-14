import React, { useState } from "react";
import $ from "jquery";
import logo from "../../../img/logo/logo-desktop.png";
import Toast from "../../../components/Toast/toast";
import { createUser } from "../../utils/api";
import { Link } from "react-router-dom";

export default function CriarConta(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await createUser({
        name,
        email,
        password,
        passwordConfirmation
      });
      setMessage("Usuário criado com sucesso!");
      setTimeout(() => props.history.push("/home"), 4000);
    } catch (e) {
      setMessage(e.response.data.error);
    }
    $(".toast").toast("show");
  };
  return (
    <div className="container">
      <div className="py-5 text-center">
        <Link to="/login">
          <img
            className="d-block mx-auto mb-4"
            src={logo}
            width="293"
            height="62"
            alt="Logo RU"
          />
        </Link>
        <h2>Cadastro de Visitantes</h2>
      </div>

      <div className="row">
        <div className="col-12">
          <form
            onSubmit={handleSubmit}
            className="needs-validation"
            autoComplete="off"
          >
            <div className="mb-3">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nome"
                value={name}
                onChange={event => setName(event.target.value)}
                autoFocus
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="seu@email.com"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="passwordConfirmation">Confirme sua Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirmation"
                  autoComplete="new-password"
                  value={passwordConfirmation}
                  onChange={event =>
                    setPasswordConfirmation(event.target.value)
                  }
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <button
                className="btn btn-lg btn-success btn-block"
                type="submit"
                style={{ maxWidth: "350px" }}
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toast message={message} />
    </div>
  );
}
