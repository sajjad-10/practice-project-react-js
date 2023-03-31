const Main = (props) => {
    const btnStyles = {
        backgroundColor: "#7b1fa2",
        color: "#fff",
        font: "inherit",
        border: "none",
        outline: "none",
        borderRadius: "3px",
        padding: "0.6rem",
        margin: "0.6rem auto",
        marginLeft: "0.6rem",
    };

    return (
        <>
            <button style={btnStyles} onClick={props.click}>
                Show/Hide Products
            </button>
        </>
    );
};

export default Main;
