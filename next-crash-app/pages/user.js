function UserPage(props){
    return <h2>{props.username}</h2>
}

export default UserPage

export async function getServerSideProps(context){
    return{
        props:{username:"Sajjad"}
    }
}