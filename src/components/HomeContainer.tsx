import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { archiveOutline, archiveSharp, settingsOutline, settingsSharp, peopleOutline, peopleSharp, downloadOutline,downloadSharp} from 'ionicons/icons';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {

}

const HomeContainer: React.FC<ContainerProps> = () => {
    return (
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle><IonIcon ios={downloadOutline} md={downloadSharp}></IonIcon> Import</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Import">
                    <IonLabel>
                      Se rendre à l'import de fichiers
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
                <IonCardHeader>
                  <IonCardTitle><IonIcon ios={archiveOutline} md={archiveSharp}></IonIcon> Consult</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Consult">
                    <IonLabel>
                      Se rendre à la consultations de fichiers
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonCard>
                <IonCardHeader>
                  <IonCardTitle><IonIcon ios={peopleOutline} md={peopleSharp}></IonIcon> Utilisateurs</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/User">
                    <IonLabel>
                      Se rendre à la gestion des utilisateurs
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle><IonIcon ios={settingsOutline} md={settingsSharp}></IonIcon> Paramètres</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Settings">
                    <IonLabel>
                      Se rendre à aux paramètres
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
    );
  
};

export default HomeContainer;
