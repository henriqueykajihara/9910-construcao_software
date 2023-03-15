import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import "./style.css";
import { IonReactRouter } from "@ionic/react-router";
import { pizza, newspaper, restaurant, card, people} from 'ionicons/icons';
import React from "react";
import { Redirect, Route } from "react-router";
import Cardapio from "../../pages/Cardapio";
import FormasPagamento from "../../pages/FormasPagamento";
import Historico from "../../pages/Historico";
import Inicio from "../../pages/Inicio";
import Transferencia from "../../pages/Transferencia";
// import { Container } from './styles';

const Tabs: React.FC = () => {
  return (
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/cardapio">
            <Cardapio/>
          </Route>
          <Route exact path="/historico">
            <Historico/>
          </Route>
          <Route path="/inicio">
            <Inicio/>
          </Route>
          <Route path="/pagamento">
            <FormasPagamento />
          </Route>
          <Route path="/transferencia">
            <Transferencia/>
          </Route>
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className="no-border" color="primary" slot="bottom">
          <IonTabButton tab="cardapio" href="/cardapio">
            <IonIcon aria-hidden="true" icon={pizza} />
          </IonTabButton>
          <IonTabButton tab="historico" href="/historico">
            <IonIcon aria-hidden="true" icon={newspaper} />
          </IonTabButton>
          <IonTabButton tab="inicio" href="/inicio">
            <IonIcon aria-hidden="true" icon={restaurant} />
          </IonTabButton>
          <IonTabButton tab="pagamento" href="/pagamento">
            <IonIcon aria-hidden="true" icon={card} />
          </IonTabButton>
          <IonTabButton tab="transferencia" href="/transferencia">
            <IonIcon aria-hidden="true" icon={people} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
};

export default Tabs;
