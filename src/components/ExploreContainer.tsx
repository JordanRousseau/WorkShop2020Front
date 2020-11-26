import React from 'react';
import Import from './ImportContainer';
import CommandeContainer from './CommandeContainer';
import ConsultContainer from './ConsultContainer';
import DevisContainer from './DevisContainer';
import './ExploreContainer.css';
import FactureContainer from './FactureContainer';
import HomeContainer from './HomeContainer';
import LivraisonContainer from './LivraisonContainer';
import PaieContainer from './PaieContainer';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  if(name==='Home'){
    return(<HomeContainer></HomeContainer>);
  }else if (name==='Consult'){
    return(<ConsultContainer></ConsultContainer>);
  }else if (name==='Documents=Commande'){
    return(<CommandeContainer ></CommandeContainer>);
  }else if (name==='Documents=Facture'){
    return(<FactureContainer ></FactureContainer>);
  }else if (name==='Documents=Devis'){
      return(<DevisContainer ></DevisContainer>);
  }else if (name==='Documents=Livraison'){
    return(<LivraisonContainer ></LivraisonContainer>);
  }else if (name==='Documents=Paie'){
    return(<PaieContainer ></PaieContainer>);
  }else if (name==='Import'){
    return(<Import></Import>);
  }else{
    return (
      <div className="container">
        <strong>{name}</strong>
        <p>En Construction</p>
      </div>
    );
  }
};

export default ExploreContainer;
