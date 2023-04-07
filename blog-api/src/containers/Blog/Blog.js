import { useEffect, useState } from "react";
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
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((item) => {
                    return {
                        ...item,
                        author: "Sajjad",
                    };
                });
                setPosts(updatedPosts);
            });
    }, []);
    const postsComponent = posts.map((item) => {
        return <Post key={item.id} author={item.author} title={item.title} />;
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
