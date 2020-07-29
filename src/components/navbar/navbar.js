import React from 'react';
import { Link } from 'react-router-dom';
import laterflix from '../../assets/images/laterflix.png';
import './navbar.css';
//import ButtonLink from '../../components/button/ButtonLink';
import Button from '../btn/btn';

function Navbar() {

    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" alt="logo laterflix" src={laterflix} />
            </Link>
            <ul className="menubtn">
                <li>
                    <a href="#Science" className="navItem">
                        Science
                    </a>                
                </li>
                <li>
                    <a href="#Movies" className="navItem">
                        Movies
                    </a>  
                </li>
                <li>
                    <a href="#Docs" className="navItem">
                        Docs
                    </a> 
                </li>
                <li>
                    <a href="#Learning" className="navItem">
                        Learning
                    </a> 
                </li>
            </ul>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                adicionar video
            </Button>
        </nav>
    );
}

export default Navbar;