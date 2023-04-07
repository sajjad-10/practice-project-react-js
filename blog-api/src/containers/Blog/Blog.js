import { useEffect } from "react";
import axios from "axios";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";

import "./Blog.css";

const Blog = () => {
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
            });
    }, []);
    return (
        <div>
            <section className="posts">
                <Post key={1} />
                <Post key={2} />
            </section>
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
