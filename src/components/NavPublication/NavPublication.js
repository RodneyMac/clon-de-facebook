import React from 'react';
import '../NavPublication/NavPublication.css';
import {FaUserFriends} from 'react-icons/fa';

const NavPublication = () => {
  return(
    <div className='container-nav-publication'>
        <div className='div-nav-header-avatar'></div>
        <div className='div-nav-header-user'>
            <div className='nav-header-usuario'>Juan Pérez</div>
            <div className='nav-header-detalles'><FaUserFriends className='nav-header-user-icon'/> Compartir con amigos</div>
        </div>
    </div>
  )
};

export default NavPublication;
