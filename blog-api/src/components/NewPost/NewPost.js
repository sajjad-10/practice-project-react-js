import React, { useState } from "react";
import "./NewPost.css";
const NewPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("Sajjad");

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
                <button>Add Post</button>
            </div>
        </>
    );
};

export default NewPost;
