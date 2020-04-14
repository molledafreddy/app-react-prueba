import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'

function Header(props){
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/multiplication">
                                <a className="nav-link" href="#">Multiplication</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/longest">
                                <a className="nav-link" href="#">LonGest </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/repetition">
                                <a className="nav-link" href="#">Repetition </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lastname">
                                <a className="nav-link" href="#">Last Name </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/uniquenumbers">
                                <a className="nav-link" href="#">Unique Numbers </a>
                            </Link>
                        </li>
                    </ul>
              </div>
            </nav>
        </div>
    )
}

export default Header