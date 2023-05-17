import { useState, useEffect } from "react";
import axios from "axios";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";

import "./Blog.css";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                const postsData = response.data.slice(0, 4);
                const updatedPosts = postsData.map((item) => {
                    return { ...item, author: "Sajjad" };
                });
                setPosts(updatedPosts);
            });
    });
    const selectPostHandler = (id) => {
        setSelectedPostId(id);
    };
    const postsComponent = posts.map((post) => {
        return (
            <Post
                key={post.id}
                title={post.title}
                author={post.author}
                click={() => selectPostHandler(post.id)}
            />
        );
    });
    return (
        <div>
            <section className="posts">{postsComponent}</section>
            <section>
                <FullPost id={selectedPostId} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;
