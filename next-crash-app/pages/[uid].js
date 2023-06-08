function UserIdPage(props) {
    return <h2>{props.id}</h2>;
}
export default UserIdPage;

export async function getServerSideProps(context) {
    const { params } = context;
    const useId = params.uid;

    return {
        props: { id: "userid-" + useId },
    };
}
