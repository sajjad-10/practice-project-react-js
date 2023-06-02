import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../../../axios";
import Post from "../../../components/Post/Post";

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    // const [selectedPostId, setSelectedPostId] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/posts")
            .then((response) => {
                const postsData = response.data.slice(0, 4);
                const updatedPosts = postsData.map((item) => {
                    return { ...item, author: "Sajjad" };
                });
                setPosts(updatedPosts);
            })
            .catch((err) => {
                setError(true);
            });
    }, []);
    const selectPostHandler = (id) => {
        navigate(`/${id}`);
    };
    let postsComponent = (
        <p style={{ textAlign: "center" }}>Fetching data failed!!!</p>
    );

    if (!error) {
        postsComponent = posts.map((post) => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    click={() => selectPostHandler(post.id)}
                />
            );
        });
    }

    return <section className="posts">{postsComponent}</section>;
};

export default Posts;
