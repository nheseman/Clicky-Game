import React from 'react';
import Animate from '../transitions/animation';

const Header = () => { return(
    <header className="titleHeader">     
        <Animate in={true} duration={200} length={'100px'} direction={'bottom'} >
            <h1>Marvel Heroes and Villians Memory Game</h1>
        </Animate>      
    </header>
)};

export default Header;