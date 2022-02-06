import React from 'react';
import '../ButtonPublication/ButtonPublication.css';
import {Link} from 'react-router-dom';

const ButtonPublication = () => {
  return(
    <div className='container-button-publication'>
        <Link to="/"><button className='btn-publication'>Publicar</button></Link>
    </div>
  )
};

export default ButtonPublication;
