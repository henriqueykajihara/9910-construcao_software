import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import "./style.css";
import React from "react";

const Login: React.FC = () => {
  function handleLogin() {}

  return (
    <IonContent color="primary" class="ion-padding">
      <IonItem className="input-transparente" fill="outline">
        <IonLabel position="floating">Login</IonLabel>
        <IonInput placeholder="Ex: RA000000"></IonInput>
      </IonItem>
      <IonItem className="input-transparente ion-margin-top" fill="outline">
        <IonLabel position="floating">Senha</IonLabel>
        <IonInput type="password"></IonInput>
      </IonItem>

      <IonGrid>
        <IonRow>
          <IonCol className="ion-no-padding">
            <IonButton color="light" expand="block">
              Entrar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Login;
