import React from 'react';
import './SearchBar.css';
import {FaRegUserCircle} from 'react-icons/fa';
import {BiSearchAlt2} from 'react-icons/bi';
import {FaFacebookMessenger} from 'react-icons/fa';

const SearchBar = () => {
  return(
      <div className="container">
        <div className="div-buscar">
            <div className='icono-user'>
                <div className='img-icono-user'><FaRegUserCircle/></div>
            </div>
            <div className='div-input-search'>
                <a href='#' className='input-div-buscar' placeholder='Buscar'>
                    <div className='img-icono-user img-search-icon'><BiSearchAlt2/></div>
                    <p className='buscar'>Buscar</p>
                </a>
            </div>
            <div className='icono-messenger'>
                <div className='img-icono-user'><FaFacebookMessenger/></div>
            </div>
        </div>
      </div>
  )
};

export default SearchBar;
