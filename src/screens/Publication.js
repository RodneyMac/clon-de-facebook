import React from 'react';
import BodyPublication from '../components/BodyPublication/BodyPublication';
import ButtonPublication from '../components/ButtonPublication/ButtonPublication';
import HeaderPublication from '../components/HeaderPublication/HeaderPublication';
import NavPublication from '../components/NavPublication/NavPublication';

const Publication = () => {
  return(
    <div>
        <HeaderPublication/>
        <NavPublication/>
        <BodyPublication/>
        <ButtonPublication/>
    </div>
  )
};

export default Publication;
