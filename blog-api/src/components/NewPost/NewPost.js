import "./NewPost.css";
const NewPost = () => {
    return (
        <>
            <div className="new-post">
                <h2>Add a Post</h2>
                <label>Title</label>
                <input type="text" />
                <label>Content</label>
                <textarea rows="4" />
                <label>Author</label>
                <select>
                    <option value="Sajjad">Sajjad</option>
                    <option value="Sajjad2">Sajjad-2</option>
                </select>
                <button>Add Post</button>
            </div>
        </>
    );
};

export default NewPost;
