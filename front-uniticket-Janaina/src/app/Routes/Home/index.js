import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import $ from "jquery";
import qrcode from "../../../img/qrcode.png";
import Toast from "../../../components/Toast/toast";
import { getUserCredits, acquireCredits } from "../../utils/api";

export default function Home(props) {
  const [totalCredits, setTotalCredits] = useState(0);
  const [creditsQuantity, setCreditsQuantity] = useState(1);
  const [orderTotal, setOrderTotal] = useState(0);
  const [creditPrice, setCreditPrice] = useState(0);
  const [message, setMessage] = useState("");
  $('[data-toggle="tooltip"]').tooltip();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await acquireCredits({ creditsQuantity });
      setMessage(`${creditsQuantity} crédito(s) adquirido(s) com sucesso!`);
      setCreditsQuantity(1);
      await setCreditsInfo();
    } catch (e) {
      setMessage("Falha ao adquirir créditos!");
    }
    $(".toast").toast("show");
  };

  const setCreditsInfo = async () => {
    try {
      const response = await getUserCredits();
      setTotalCredits(response.data.credits);
      setCreditPrice(parseInt(response.data.creditPrice));
      setOrderTotal(parseInt(response.data.creditPrice));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setCreditsInfo();
  }, []);

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <h3 className="px-3 mt-2">Você possui: {totalCredits} crédito(s)</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img
          alt="QRCode"
          className="mt-2"
          src={qrcode}
          width="300"
          height="300"
        />
      </div>
      <div>
        <hr />
        <div className="row justify-content-center align-items-center">
          <h3 className="px-3 mt-2">Adquirir Créditos</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="quantity">Quantidade</label>
              <input
                className="form-control"
                type="number"
                id="quantity"
                name="quantity"
                value={creditsQuantity}
                onChange={event => {
                  setCreditsQuantity(event.target.value);
                  setOrderTotal(+event.target.value * creditPrice);
                }}
                autoFocus
                min="1"
                max="50"
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="type">Valor</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">R$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={orderTotal}
                  disabled
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex"
            style={{ justifyContent: "flex-end", marginTop: "-15px" }}
          >
            <button
              data-toggle="tooltip"
              data-placement="top"
              title="Defina um valor entre 1 e 50 e clique para adquirí-los."
              type="submit"
              className="btn btn-success btn-sm"
            >
              Comprar
              <FaShoppingCart className="fa-sm ml-1 mb-1" />
            </button>
          </div>
        </form>
      </div>
      <Toast message={message} />
    </>
  );
}
