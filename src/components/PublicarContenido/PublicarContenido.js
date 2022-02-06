import React from 'react';
import '../PublicarContenido/PublicarContenido.css';
import {IoImagesOutline} from 'react-icons/io5';
import {Link} from 'react-router-dom';

const PublicarContenido = () => {
  return(
    <div className="container-publicar-contenido">
        <div className='div-imagen-publicar-contenido'>
        </div>
        <div className='div-input-publicar-contenido'>
          <Link to="/publish">
            <input type="text" className='input-publicar-contenido' placeholder='¿Qué estás pensando?' />
          </Link>
        </div>
        <div className='div-seleccionar-foto'>
            <IoImagesOutline className='image-picture-publicar-contenido'/>Foto
        </div>
    </div>
  )
};

export default PublicarContenido;
