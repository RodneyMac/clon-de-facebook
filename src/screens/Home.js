import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import NavBar from '../components/NavBar/NavBar';
import PublicarContenido from '../components/PublicarContenido/PublicarContenido';
import Publicacion from '../components/Publicacion/Publicacion';

const Home = () => {
  return(
    <div>
        <SearchBar/>
        <NavBar/>
        <PublicarContenido/>
        <Publicacion/>
    </div>
  )
};

export default Home;
