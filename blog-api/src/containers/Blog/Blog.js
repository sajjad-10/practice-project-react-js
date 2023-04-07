import { useEffect, useState } from "react";
import axios from "axios";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";

import "./Blog.css";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostID, setSelectedPostID] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        axios
            .get("/posts")
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((item) => {
                    return {
                        ...item,
                        author: "Sajjad",
                    };
                });
                setPosts(updatedPosts);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }, []);
    const handleDisplayPost = (id) => {
        console.log(id);
        setSelectedPostID(id);
    };
    let postsComponent = <p style={{ textAlign: "center" }}>Fetching data fail</p>;
    if (!error) {
        postsComponent = posts.map((item) => {
            return (
                <Post
                    key={item.id}
                    author={item.author}
                    title={item.title}
                    click={() => handleDisplayPost(item.id)}
                />
            );
        });
    }
    return (
        <div>
            <section className="posts">{postsComponent}</section>
            <section>
                <FullPost id={selectedPostID} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;
