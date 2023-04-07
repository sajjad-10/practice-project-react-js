import './Post.css'
const Post = (props) => {
    return (
        <>
            <article className="post">
                <h1>{props.title}</h1>
                <div>
                    <div className="author">Author</div>
                </div>
            </article>
        </>
    );
};

export default Post;
