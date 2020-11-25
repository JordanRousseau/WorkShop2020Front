import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol,IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {

}

const ConsultContainer: React.FC<ContainerProps> = () => {
    return (
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Devis</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Documents">
                    <IonLabel>
                      Consulter les Devis
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Commande</IonCardTitle>
                </IonCardHeader>
                  <IonItem routerLink="/page/Documents">
                    <IonLabel>
                      Consulter les bon de Commande
                    </IonLabel>
                  </IonItem>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Livraison</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Home">
                    <IonLabel>
                      Consulter les bon de Livraison
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
                  <IonCardTitle>Facture</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Home">
                    <IonLabel>
                      Consulter les Facture
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Paie</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Home">
                    <IonLabel>
                      Consulter les fiches de Paie
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Réunion</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Home">
                    <IonLabel>
                      Consulter les notes de Réunion
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
                  <IonCardTitle>Spécification</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem routerLink="/page/Home">
                    <IonLabel>
                      Consulter les notes de Spécification
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
    );
  
};

export default ConsultContainer;
