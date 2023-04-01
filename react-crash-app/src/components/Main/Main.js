import { useEffect, useRef } from "react";
const Main = (props) => {
    const btnRef = useRef(null);
    useEffect(() => {
        console.log("Main.js useEffect");
        setTimeout(() => {
            // alert("HTTP Request!");
            btnRef.current.click()
        }, 2000);
        return () => {
            console.log("Main.js cleanUp");
        };
    }, []);
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
            <button ref={btnRef} style={btnStyles} onClick={props.click}>
                Show/Hide Products
            </button>
            <button onClick={props.login}>Login</button>
        </>
    );
};

export default Main;
