import { useRouter } from "next/router";
const SinglePost = () => {
    const router = useRouter()

    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h2>Single Post Page</h2>
        </div>
    );
};

export default SinglePost;
