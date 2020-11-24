import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';
import HomeContainer from './HomeContainer';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  if(name == "Home"){
    return ( <div className="container">
    <IonCard>
    <IonCardHeader>
        <IonCardTitle>Import</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Go to import
        </IonCardContent>

    </IonCard>
</div>)
  }else{
    return (
      <div className="container">
        <strong>{name}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    );
  }
};

export default ExploreContainer;
