import React from 'react';
import './NavBar.css';
import {FaIdCard} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {FaStore} from 'react-icons/fa';
import {MdOndemandVideo} from 'react-icons/md';
import {HiOutlineBell} from 'react-icons/hi';
import {AiOutlineMenu} from 'react-icons/ai';

const NavBar = () => {
  return(
    <div className='container-navbar'>
        <div className='box-icon active'><FaIdCard className='icono'/></div>
        <div className='box-icon'><FaUserFriends className='icono'/></div>
        <div className='box-icon'><FaStore className='icono'/></div>
        <div className='box-icon'><MdOndemandVideo className='icono'/></div>
        <div className='box-icon'><HiOutlineBell className='icono'/></div>
        <div className='box-icon'><AiOutlineMenu className='icono'/></div>
    </div>
  )
};

export default NavBar;
