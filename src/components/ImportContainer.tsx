import { Camera } from '@ionic-native/camera';
import React, { useRef } from 'react';
import { IonButton, IonHeader, IonContent, IonPage, IonTitle, IonToolbar, IonLabel,IonItem } from '@ionic/react';

interface InternalValues {
  file: any;
}

const Import: React.FC = () => {

  const values = useRef<InternalValues>({
    file: false,
  });

  const onFileChange = (fileChangeEvent: any) => {
    values.current.file = fileChangeEvent.target.files[0];
  };

  const onSubmit = async () => {
    if (!values.current.file) {
      return false;
    }

    let formData = new FormData();

    formData.append("files", values.current.file, values.current.file.name);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/Import`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const openScanner = async () => {
    await Camera.getPicture()
    .then(data => console.log('Took a picture!', data))
    .catch(e => console.log('Error occurred while taking a picture', e));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scan a document</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={openScanner}>Scan image</IonButton>
         or 
        <IonItem>
          <IonLabel position="floating">Upload file</IonLabel>
          <br/>
          <input type="file" onChange={(ev) => onFileChange(ev)} />
        </IonItem>

        <IonButton type="submit" onClick={() => onSubmit()}>Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Import