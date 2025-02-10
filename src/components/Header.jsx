import React, { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.svg";
import mobileMenuIcon from "../assets/Combined Shape.png";
import SearchBar from "./SearchBar";

function Header({ setSearchQuery }) {
    const [showSearch, setShowSearch] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Close search bar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        };

        if (showSearch) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showSearch]);

    return (
        <header className={`header ${showHeader ? "visible" : "hidden"}`}>
            <div className="top-header">
                <div className="container">
                    <div className="top-header-wrapper">
                        <div className="menu-button" onClick={() => setIsMenuOpen(true)}>
                            <img src={mobileMenuIcon} alt="Mobile menu" />
                        </div>
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="search" onClick={() => setShowSearch(true)}>
                            <img src={searchIcon} alt="Search" />
                        </div>
                    </div>
                    {/* Show SearchBar when clicked */}
                    {showSearch && (
                        <div ref={searchRef} className="search-wrapper">
                            <SearchBar setSearchQuery={setSearchQuery} onClose={() => setShowSearch(false)} />
                        </div>
                    )}
                </div>
            </div>

            <nav className="primary-menu sticky">
                <div className="container">
                    <div className="menu-wrapper">
                        <div className="nav-item dropdown">
                            <a href="#">Demos</a>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#">Post</a>
                            <div className="sub-menu">
                                <div className="sub-menu-item">
                                    <a href="#">Post Header</a>
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
                        <div className="nav-item dropdown"><a href="#">Features</a></div>
                        <div className="nav-item dropdown"><a href="#">Categories</a></div>
                        <div className="nav-item dropdown"><a href="#">Shop</a></div>
                        <div className="nav-item"><a href="#">Buy Now</a></div>
                    </div>
                </div>
            </nav>

            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
}

export default Header;
