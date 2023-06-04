import { Routes, Route, Link , Navigate } from "react-router-dom";

import Posts from "./Posts/Posts";
import "./Blog.css";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

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
                <Route path="/new-post" element={<NewPost />} />
                <Route path="/test-redirect" element={<Navigate to="/"/>} />
                <Route path="/:id" exact element={<FullPost />} />
                <Route path="*" element={<h2 style={{ textAlign: "center" }}>Not-Found | 404</h2>} />
            </Routes>
        </div>
    );
};

export default Blog;
