import React, { useState } from "react";
import axios from "axios";
import "./NewPost.css";
const NewPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("Sajjad");

    const postDataHandler = () => {
        const data = {
            title: title,
            body: content,
            author: author,
        };
        axios
            .post("https://jsonplaceholder.typicode.com/posts", data)
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <>
            <div className="new-post">
                <h2>Add a Post</h2>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Content</label>
                <textarea
                    rows="4"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
                <label>Author</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="Sajjad">Sajjad</option>
                    <option value="Sajjad2">Sajjad-2</option>
                </select>
                <button onClick={postDataHandler}>Add Post</button>
            </div>
        </>
    );
};

export default NewPost;