import React from "react";
import closeIcon from "../assets/x.png";

function PostPopup({ post, onClose }) {
    if (!post) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}><img src={closeIcon} alt="Close" /></button>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
            </div>
        </div>
    );
}

export default PostPopup;
