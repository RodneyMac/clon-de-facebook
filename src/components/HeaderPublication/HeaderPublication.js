import React from 'react';
import '../HeaderPublication/HeaderPublication.css';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import {Link} from 'react-router-dom';

const HeaderPublication = () => {
  return(
    <div className='hp-container'>
        <div className='div-contenedor-header'>
          <div className='div-crear-publicacion-izquierda'>
            <Link to="/"><HiOutlineArrowLeft className='header-arrow-icon'/></Link> Crear publicación
          </div>
            <div className='div-midle-header'></div>
            <div className='div-crear-publicacion-derecha'>
                Publicar
            </div>
        </div>
    </div>
  )
};

export default HeaderPublication;
