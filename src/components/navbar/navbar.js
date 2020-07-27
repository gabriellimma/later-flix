import React from 'react';
import laterflix from '../../assets/images/laterflix.png';
import './navbar.css';
//import ButtonLink from '../../components/button/ButtonLink';
import Button from '../btn/btn';

function Navbar() {

    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" alt="logo laterflix" src={laterflix} />
            </a>
            <ul className="menubtn">
                <li>
                    <a href="#Science">
                        Science
                    </a>                
                </li>
                <li>
                    <a href="#Movies">
                        Movies
                    </a>  
                </li>
                <li>
                    <a href="#Docs">
                        Docs
                    </a> 
                </li>
                <li>
                    <a href="#Learning">
                        Learning
                    </a> 
                </li>
            </ul>
            <Button as="a" className="ButtonLink" href="/">
                adicionar video
            </Button>
        </nav>
    );
}

export default Navbar;