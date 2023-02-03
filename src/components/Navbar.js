import React from 'react'
import logo from '../assets/images/logo/Ztoo-Logo.png'

export default function Navbar() {
    return (
        <div>
            {/* <!-- NAVBAR --> */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="navbar">
                <div className="container">
                    <a className="navbar-brand logo" href="#home"><img src={logo} width="22px" height="24px" alt='ztoo logo' />
                        ZTOO </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#client">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- NAVBAR END--> */}
        </div>
    )
}
