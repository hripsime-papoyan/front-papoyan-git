import React from "react";

function PostCard({ post, onClick }) {
    return (
        <div className="post-card" onClick={() => onClick(post)}>
            <img
                src={post.img}
                srcSet={`${post.img_2x} 2x`}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={post.title}
            />
            <p className="category">{post.tags}</p>
            <h2>{post.title}</h2>
            <div className="post-attr">
                <span className="author">{post.autor}</span> <span>{post.date}</span><span>{post.views} Views</span>
            </div>
            <p className="short-desc">{post.text}</p>
        </div>
    );
}

export default PostCard;
