import { useEffect } from "react";
const Main = (props) => {
    useEffect(() => {
        console.log("Main.js useEffect");
    });
    const btn = {
        backgroundColor: "#7b1fa2",
        color: "#fff",
        font: "inherit",
        border: "none",
        outline: "none",
        borderRadius: "3px",
        padding: "0.6rem",
        margin: "0.6rem auto",
    };

    return (
        <>
            <div>
                <h2>Book Store</h2>
                <button style={btn} onClick={props.click}>
                    Show/Hide Products
                </button>
            </div>
        </>
    );
};

export default Main;
