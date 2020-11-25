import { IonItem, IonLabel, IonContent, IonList, IonListHeader, IonMenuToggle } from '@ionic/react';
//import { bookmarkOutline } from 'ionicons/icons';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
    type: string;
}

interface DocumentProps {

    title: string;
    url: string;
}

const documentList: DocumentProps[] = [
    {
      title: 'devis1',
      url: '/page/Home'
    },
    {
      title: 'devis2',
      url: '/page/Import'
    },
    {
      title: 'devis3',
      url: '/page/Consult',
    },
    {
      title: 'devis4',
      url: '/page/Users'
    },
    {
      title: 'devis5',
      url: '/page/Settings'
    }
    
  ];

const DocumentContainer: React.FC<ContainerProps> = ({ type }) => {
    return (
    <IonContent>
        <IonList id="inbox-list">
          <IonListHeader><strong>{type}</strong></IonListHeader>
          {documentList.map((documentProps, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem  routerLink={documentProps.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{documentProps.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    );
  
};

export default DocumentContainer;
