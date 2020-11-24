import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  
}

const HomeContainer: React.FC<ContainerProps> = ({}) => {
  return (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Import</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
             Go to import
           </IonCardContent>
        </IonCard>
  );
};

export default HomeContainer;
