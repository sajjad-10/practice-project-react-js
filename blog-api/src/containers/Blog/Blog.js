import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";

import './Blog.css'

const Blog = () => {
    return (
        <div>
            <section className="posts">
                <Post key={1}/>
                <Post key={2}/>
            </section>
            <section>
                <FullPost />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;
