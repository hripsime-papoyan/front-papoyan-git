import React from "react";
import closeIcon from "../assets/x.png";

function SearchBar({ setSearchQuery, onClose }) {
    return (
        <div className="search-block">
            <input
                type="text"
                placeholder="Search posts..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                autoFocus
            />
            <button className="search-close" onClick={onClose}>
                <img src={closeIcon} alt="Close" />
            </button>
        </div>
    );
}

export default SearchBar;
