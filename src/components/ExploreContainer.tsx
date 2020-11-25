import React from 'react';
import ConsultContainer from './ConsultContainer';
import DocumentContainer from './DocumentContainer';
import './ExploreContainer.css';
import HomeContainer from './HomeContainer';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  if(name==='Home'){
    return(<HomeContainer></HomeContainer>);
  }else if (name==='Consult'){
    return(<ConsultContainer></ConsultContainer>);
  }else if (name==='Documents'){
    return(<DocumentContainer type={name} ></DocumentContainer>);
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
