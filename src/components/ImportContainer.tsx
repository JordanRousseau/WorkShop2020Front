import { Camera } from '@ionic-native/camera';
import React, { useRef, useState } from 'react';
import { IonButton, IonHeader, IonContent, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, isPlatform,IonCard, IonCardHeader, IonCardContent,IonSelect, IonSelectOption } from '@ionic/react';
import Chart from 'chart.js';

isPlatform('ios');

interface InternalValues {
  file: any;
}

const Import: React.FC = () => {

  const [isSubmitted, _setIsSubmitted] = useState(false)
  const [isSubmittedDocType, _setIsSubmittedDocType] = useState(false)
  const [docTypeId, _setDocTypeId] = useState(null)
  const [docTypes, _setDocTypes] = useState([])
  const [docId, _setDocId] = useState(null)
  const chart = useRef(null)

  const values = useRef<InternalValues>({
    file: false,
  });

  const onFileChange = (fileChangeEvent: any) => {
    values.current.file = fileChangeEvent.target.files[0];
  };

  const onSubmit = async () => {
    if (!values.current.file) {
      _setIsSubmitted(false)
      return false;
    }

    let formData = new FormData();

    formData.append("files", values.current.file, values.current.file.name);
    formData.append("userId", "0");

    try {
      const response : Response = await fetch(`${process.env.REACT_APP_API_URL}/Import`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        _setIsSubmitted(false)
        throw new Error(response.statusText);
      }

      _setIsSubmitted(true)

      const responseData = await response.json();

      console.log(response);

      _setDocId(responseData.document.id)

      var labels : Array<string> = []
      var data : Array<number> = []

      if (responseData.prediction) {
        labels = responseData.prediction.predictions.map((pred: any) => pred.tagName)
        data = responseData.prediction.predictions.map((pred: any)=> pred.probability)
      }

      var ctx = chart.current;
      if(ctx && await responseData) {
        
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              label: 'Type of document prediction',
              data: data,
              backgroundColor: [
                '#2c3f6f',
                '#92a3ce',
                '#0686bf',
                '#f25abc',
                '#fffff7'
              ], // array should have same number of elements as number of dataset
              borderColor: '#000000',// array should have same number of elements as number of dataset
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        })
        console.log(docTypes)
          try {
            const res : Response = await fetch(`${process.env.REACT_APP_API_URL}/type-documents`, {
             method: "GET",
            });

            let rData = await res.json()
            console.log(rData)
            _setDocTypes(rData)
          } catch(error){
            console.log(error)
          }
        
      }
    
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitDocType= async () => {
    let id: any = docTypeId
    if(id != null){
    let body: any = JSON.stringify({ 
      "typeDocumentId": id
    })

    let headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type','application/json')


    try {
      const response : Response = await fetch(`${process.env.REACT_APP_API_URL}/documents/${docId}`, {
        headers: headers,
        method: "PATCH",
        body: body,
      });

      if (!response.ok) {
        _setIsSubmittedDocType(false)
        throw new Error(response.statusText);
      }

      _setIsSubmittedDocType(true)
    }
    catch(error){
      console.log(error)
    }
  }
  }
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
        {(isPlatform('ios') || isPlatform('mobile')) && ( <>
          <IonButton onClick={openScanner}>Scan image</IonButton>
          or
         </>)
         }
        <IonItem>
          <IonLabel position="floating">Upload file</IonLabel>
          <br/>
          <input type="file" onChange={(ev) => onFileChange(ev)} />
        </IonItem>

        <IonButton type="submit" onClick={() => onSubmit()} disabled={isSubmitted} >Submit</IonButton>
        <br />
        {isSubmitted && chart && 
        <IonCard>
      <IonCardHeader>
        Type of document
        <IonItem>
            <IonLabel>Isn't the good type ? change here</IonLabel>
            <IonSelect value={docTypeId} onIonChange={e => _setDocTypeId(e.detail.value)} disabled={isSubmittedDocType}> 
              {docTypes.map((type: any)=>
              
              <IonSelectOption key={type.id} value={type.id}>{type.label}</IonSelectOption>
              )}
            </IonSelect>
{!isSubmittedDocType && 
            <IonButton type="submit" onClick={() => onSubmitDocType()} disabled={isSubmittedDocType} >Save</IonButton>}
          </IonItem>
      </IonCardHeader>
      <IonCardContent>
        <canvas ref={chart}></canvas>
      </IonCardContent>
    </IonCard>}

      </IonContent>
    </IonPage>
  );
};

export default Import

