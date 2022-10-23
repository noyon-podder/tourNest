import React from 'react';
import Menubar from '../../components/Menubar/Menubar';
import './Header.css';

const Header = () => {
    return (
        <header className='header-section'>
           <Menubar></Menubar>

           <h3>hero section start </h3>
        </header>
    );
};

export default Header;