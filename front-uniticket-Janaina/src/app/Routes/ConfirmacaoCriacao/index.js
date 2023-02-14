import React, { useState, useEffect } from "react";
import { parse } from "query-string";
import $ from "jquery";
import "./confirmacao-criacao.scss";
import Toast from "../../../components/Toast/toast";
import { creationConfirmation } from "../../utils/api";

export default function ConfirmacaoCriacao({ history, location }) {
  const LOADING = "CARREGANDO";
  const OK = "OK";
  const ERROR = "ERROR";
  const SUCCESS_MESSAGE = "Conta ativada com sucesso.";
  const ERROR_MESSAGE = "Falha ao ativar conta.";
  const [status, setStatus] = useState(LOADING);
  const [message, setMessage] = useState(0);

  const circleLoaderClass = status => {
    if (status === LOADING) return "";
    return status === OK ? "load-complete" : "load-error";
  };

  const checkMarkClass = status => {
    if (status === LOADING) return "";
    return status === OK ? "draw show" : "error show";
  };

  const confirmarCriacao = async () => {
    try {
      await creationConfirmation(parse(location.search).confirmation_token);
      setStatus(OK);
      setMessage(SUCCESS_MESSAGE);
    } catch (e) {
      setStatus(ERROR);
      setMessage(ERROR_MESSAGE);
    }
    $(".toast").toast("show");
    setTimeout(() => history.push("/login"), 4000);
  };

  useEffect(() => {
    confirmarCriacao();
  }, []);

  return (
    <>
      <div className="body">
        <div className={`circle-loader ${circleLoaderClass(status)}`}>
          <div className={`checkmark ${checkMarkClass(status)}`} />
        </div>
      </div>
      <Toast message={message} />
    </>
  );
}
