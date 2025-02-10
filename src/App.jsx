import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("https://cloud.codesupply.co/endpoint/react/data.json")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    const filteredPosts = posts.filter(
        (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Pass the setSearchQuery function to Header */}
            <Header setSearchQuery={setSearchQuery} />
            <PostList posts={filteredPosts} />
        </div>
    );
}

export default App;
