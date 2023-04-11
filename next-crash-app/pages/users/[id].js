import { useRouter } from "next/router";
const userId = () => {
    const router = useRouter()
    
    console.log(router.pathname);
    console.log(router.query);

    const showUserIdHandler = ()=>{
        // router.push('/users/sajjad')

        router.push({
            pathname : '/users/[id]',
            query : {id : 'sajjad'}
        })
    }
    return (
        <div>
            <h2>User ID</h2>
            <button onClick={showUserIdHandler}>Show User ID (Page)</button>
        </div>
    );
};

export default userId;
