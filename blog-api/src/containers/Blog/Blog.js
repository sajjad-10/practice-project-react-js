import { Routes, Route, Link } from "react-router-dom";

import Posts from "./Posts/Posts";
import "./Blog.css";
import NewPost from "./NewPost/NewPost";

const Blog = () => {
    return (
        <div className="blog">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: "/new-post",
                                    search: "?sort=post",
                                }}
                            >
                                New Post
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/" exact element={<Posts />} />
                <Route path="/new-post" exact element={<NewPost />} />
            </Routes>
        </div>
    );
};

export default Blog;
