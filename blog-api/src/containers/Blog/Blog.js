import { Routes, Route } from "react-router-dom";

import Posts from "./Posts/Posts";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="blog">
            <header>
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
            </header>

            <Routes>
                <Route path="/" exact element={<Posts />}  />
                {/* <Route exact path="/">
                    <Posts />
                </Route> */}
            </Routes>
        </div>
    );
};

export default Blog;
