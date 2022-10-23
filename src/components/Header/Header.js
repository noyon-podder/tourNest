import React from 'react';
import Menubar from '../../components/Menubar/Menubar';
import Hero from '../Hero/Hero';
import './Header.css';

const Header = () => {
    return (
        <header className='header-section'>
           <Menubar></Menubar>
           <Hero></Hero>
        </header>
    );
};

export default Header;