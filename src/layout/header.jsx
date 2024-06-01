import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)




    return (
        <div className="page_width">
            <header>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="bars_menu" onClick={() => setShowMenu(!showMenu)} >
                    {showMenu == true ? <FaTimes /> : <FaBars />}
                </div>
                <div className={`nav_links ${showMenu == true ? 'show_menu' : 'hide_menu'}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about_us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="btn_sign">
                            <Link to="/sign_up">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header