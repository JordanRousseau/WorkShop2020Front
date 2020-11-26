import { IonItem, IonLabel, IonContent, IonList, IonListHeader, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/react';
//import { bookmarkOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import './ExploreContainer.css';

interface DocumentContainerProps {
}

let docType = 1;

const CommandeContainer: React.FC<DocumentContainerProps> = ({  }) => {

  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [documents, setDocuments] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/type-documents/${docType}/documents`)
      .then(res => res.json())
      .then(
        (result) => {
           setDocuments(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

    return (
    <IonContent>
        <IonList id="inbox-list">
    <IonListHeader><strong>Documents</strong></IonListHeader>                    
            {documents.map((document : any, index) => {        
            return (
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Devis : {document.label}</IonCardTitle>
                </IonCardHeader>
                  <IonCardContent>
                  <IonItem href={document.url}>
                    <IonLabel>
                    {document.url}
                    </IonLabel>
                  </IonItem>
                  </IonCardContent>
              </IonCard>              
            );
          })}
        </IonList>
      </IonContent>
    );
  
};

export default CommandeContainer;
