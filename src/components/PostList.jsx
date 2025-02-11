import React, { useState } from "react";
import PostCard from "./PostCard";
import PostPopup from "./PostPopup";

function PostList({ posts }) {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="container">
            <div className="post-list">
                {posts.map((post, index) => (
                    <PostCard key={index} post={post} onClick={() => setSelectedPost(post)} />
                ))}

                {selectedPost && <PostPopup post={selectedPost} onClose={() => setSelectedPost(null)} />}
            </div>
        </div>
    );
}

export default PostList;
