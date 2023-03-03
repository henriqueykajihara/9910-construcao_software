import { IonContent, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import qrcode from "../../assets/qrcode/qrcode.jpg";
import "./style.css";

const Inicio: React.FC = () => {
  return (
    <>
      <IonContent fullscreen={true} color="light">
        <div className="quantidade-tickets">
          <p className="ion-text-center ion-text-uppercase ion-no-margin">
            Tickets disponíveis
          </p>
          <h1 className="ion-text-center">4</h1>

          <IonItem lines="none" class="ion-no-padding">
            <IonLabel className="ion-text-uppercase">
              Henrique Negri Rodrigues
            </IonLabel>
            <IonLabel className="ion-text-end ion-text-uppercase">
              RA105480
            </IonLabel>
          </IonItem>
        </div>

        <h3 className="ion-padding-start ion-no-margin ion-margin-top">Utilizar seus tickets</h3>
        <img className="imagem-qrcode" src={qrcode} alt="imagem de qrcode" />
      </IonContent>
    </>
  );
};

export default Inicio;
