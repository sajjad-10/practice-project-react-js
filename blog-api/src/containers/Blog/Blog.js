import { useState, useEffect } from "react";
import axios from "axios";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";

import "./Blog.css";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            });
    });
    const postsComponent = posts.map((post) => {
        return <Post key={post.id} title={post.title} />;
    });
    return (
        <div>
            <section className="posts">{postsComponent}</section>
            <section>
                <FullPost />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;
