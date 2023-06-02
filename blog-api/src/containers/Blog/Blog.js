import Posts from "./Posts/Posts";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="blog">
            {/* <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/new-post">New Post</a>
                        </li>

                    </ul>
                </nav>
            </header> */}
            <Posts/>
        </div>
    );
};

export default Blog;
