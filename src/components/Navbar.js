import React from 'react';
import {navbarBtns, navWrapper, icons, navbarIcons} from '../styles/navbar.module.scss'
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';

export default function Navbar() {
  return (
    <nav>
      <div className={navWrapper}>

        <div className={navbarBtns} >
          <ul>
            <li><Link to="/"> Home </Link></li>
            
            <li><Link to="/Portfolio"> Portfolio </Link></li>
          </ul>
        </div>

        <div className={navbarIcons}>
        <a href="https://github.com/les-borkowski" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'github-square']} className={icons}/>
        </a>
          <a href="https://www.linkedin.com/in/leszek-borkowski-9576607a/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} className={icons}/>
          </a>
        </div>
      </div>
    </nav>
  )
}
