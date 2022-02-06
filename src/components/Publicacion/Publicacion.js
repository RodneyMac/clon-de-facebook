import React from 'react';
import '../Publicacion/Publicacion.css';
import {IoEllipsisHorizontalSharp} from 'react-icons/io5';
import {BiWorld} from 'react-icons/bi';
import {FaThumbsUp} from 'react-icons/fa';
import {IoHeart} from 'react-icons/io5';
import {FiThumbsUp} from 'react-icons/fi';
import {GoComment} from 'react-icons/go';
import {IoArrowRedoOutline} from 'react-icons/io5';

const Publicacion = () => {
  return(
    <div className='container-publicacion'>
        <div className='div-cabecera-publicacion'>
            <div className='div-imagen-publicacion'></div>
            <div className='div-datos-publicacion'>
                <div className='nombre-usuario-publicacion'>Juan Pérez</div>
                <div className='hora-publicacion'>10 h . <BiWorld className='world-icon-state'/></div>
            </div>
            <div className='div-ellipsis-publicacion'><IoEllipsisHorizontalSharp className='ellipsis-publicacion'/></div>
        </div>
        <div className='cuerpo-publicacion'>
            <div className='texto-publicacion'>Hola gente! Que tengan un gran día! &#128512;</div>
        </div>
        <div className='emojis-reaccion-publicacion icon-line-action'>
            <div className='div-heart-icon'><IoHeart className='heart-icon'/></div><div className='div-hand-icon'><FaThumbsUp className='hand-icon'/></div><div className='number-reaction'>20</div>
        </div>
        <div className='div-pie-publicacion'>
            <div className='pie-publicacion'><FiThumbsUp className='icono-pie-publicacion'/> Me gusta</div>
            <div className='pie-publicacion'><GoComment className='icono-pie-publicacion'/> Comentar</div>
            <div className='pie-publicacion'><IoArrowRedoOutline className='icono-pie-publicacion'/> Compartir</div>
        </div>
        <div className='line-footer-publication'></div>
    </div>
  )
};

export default Publicacion;
