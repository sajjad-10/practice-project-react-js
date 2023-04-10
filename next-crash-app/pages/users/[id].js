import { useRouter } from "next/router";
const userId = () => {
    const router = useRouter()
    
    console.log(router.pathname);
    console.log(router.query);
    return (
        <div>
            <h2>User ID</h2>
        </div>
    );
};

export default userId;
