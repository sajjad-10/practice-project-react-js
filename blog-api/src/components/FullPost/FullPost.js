import { useEffect, useState } from "react";
import "./FullPost.css";
import axios from "axios";
const FullPost = (props) => {
    const [loadedPost, setLoadedPost] = useState(null);
    useEffect(() => {
        if (props.id) {
            if (!loadedPost || (loadedPost && loadedPost.id !== props.id)) {
                axios
                    .get(
                        `https://jsonplaceholder.typicode.com/posts/${props.id}`
                    )
                    .then((response) => {
                        console.log(response);
                        setLoadedPost(response.data);
                    });
            }
        }
    });
    const deletePostHandler = () => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
            .then((response) => {
                console.log(response);
            });
    };
    let post = <p style={{ textAlign: "center" }}>Please select a Post</p>;
    if (props.id) {
        post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (loadedPost) {
        post = (
            <div className="full-post">
                <h2>{loadedPost.title}</h2>
                <p>{loadedPost.body}</p>
                <div>
                    <button onClick={deletePostHandler} className="delete">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
    return <>{post}</>;
};

export default FullPost;
