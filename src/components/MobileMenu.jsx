import React from "react";
import logo from "../assets/logo.png";
import close from "../assets/x.png";

function MobileMenu({ isOpen, onClose }) {
    return (
        <div className={`mobile-menu sidenav ${isOpen ? "open" : ""}`} id="mobile-nav" >
            <div className="mobile-head">
                <div className="logo">
                    <a href="index.html">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <button className="close-button" onClick={onClose}><img src={close} /></button>
            </div>
            <div className="mobile-body">
                <div className="menu-wrapper">
                    <div className="nav-item dropdown">
                        <a href="#">Demos</a>
                        <div className="sub-menu">
                            <div className="sub-menu-item">
                                <a href="#">Post Header</a>
                            </div>
                            <div className="sub-menu-item">
                                <a href="#">Post Layout</a>
                            </div>
                            <div className="sub-menu-item">
                                <a href="#">Share Buttons</a>
                            </div>
                            <div className="sub-menu-item">
                                <a href="#">Gallery Post</a>
                            </div>
                            <div className="sub-menu-item">
                                <a href="#">Video Post</a>
                            </div>
                        </div>
                    </div>
                    <div className="nav-item dropdown"><a href="#">Post</a></div>
                    <div className="nav-item dropdown"><a href="#">Features</a></div>
                    <div className="nav-item dropdown"><a href="#">Categories</a></div>
                    <div className="nav-item dropdown"><a href="#">Shop</a></div>
                    <div className="nav-item"><a href="#">Buy Now</a></div>
                </div>
            </div>

        </div>
    );
}

export default MobileMenu;
