import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonSpinner,
} from "@ionic/react";
import { arrowDown, fastFood } from "ionicons/icons";
import React from "react";
import Header from "../../components/Header";
import { useAxios } from "../../services/api";
import { formatNumberToCurrency } from "../../utils/formatNumber";
import { formatDate, formatHourAndMinutes } from "../../utils/fotmatDate";

interface UserHistory {
  id: number;
  value: number;
  type: "transferência" | "alimentação";
  date: string;
}

const Historico: React.FC = () => {
  const icons = {
    transferência: arrowDown,
    alimentação: fastFood,
  };

  const { loading, data: userHistory } = useAxios<UserHistory[]>(
    "history",
    "get",
    {}
  );

  return (
    <>
      <Header title="Histórico" />
      <IonContent color="light" fullscreen={true}>
        <IonList className="ion-no-padding" lines="none">
          {loading && <IonSpinner name="crescent" />}
          {!loading && userHistory?.length > 0 && (
            <>
              {userHistory.map((userHistory) => (
                <IonItem color="light" key={userHistory.id}>
                  <IonIcon icon={icons[userHistory.type]} slot="start" />
                  <IonLabel>
                    <p>{userHistory.type}</p>
                    <h2>
                      <strong>
                        {formatNumberToCurrency(userHistory.value)}
                      </strong>
                    </h2>
                  </IonLabel>
                  <IonNote slot="end">
                    {formatDate(userHistory.date)}
                    {" "} - {" "}
                    {formatHourAndMinutes(userHistory.date)}
                  </IonNote>
                </IonItem>
              ))}
            </>
          )}
        </IonList>
      </IonContent>
    </>
  );
};

export default Historico;
