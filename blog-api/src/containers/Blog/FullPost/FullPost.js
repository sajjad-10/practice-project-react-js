// import axios from "axios";
import axios from "../../../axios";
import { useEffect, useState } from "react";
import { useLocation , useParams } from "react-router-dom";

import "./FullPost.css";
const FullPost = (props) => {
    const [loadedPost, setLoadedPost] = useState(null);
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            if (!loadedPost || (loadedPost && loadedPost.id !== params.id)) {
                axios.get(`/posts/${params.id}`).then((response) => {
                    setLoadedPost(response.data);
                });
            }
        }
    });
    const deletePostHandler = () => {
        axios.delete(`/posts/${params.id}`).then((response) => {
            console.log(response);
        });
    };
    let post = <p style={{ textAlign: "center" }}>Please select a Post</p>;
    if (params.id) {
        post = <p style={{ textAlign: "center" }}>Loading ...</p>;
    }
    if (loadedPost) {
        post = (
            <div className="full-post">
                <h2>{loadedPost.title}</h2>
                <p>{loadedPost.body}</p>
                <div>
                    <button className="delete" onClick={deletePostHandler}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }

    return <>{post}</>;
};

export default FullPost;
