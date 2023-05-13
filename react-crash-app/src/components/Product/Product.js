import { useEffect, useRef } from "react";
import AuthContext from "../../context/auth-context";

import Container from "../hoc/Container";
import Wrapper from "../hoc/Wrapper";
import "./Product.css";
const Product = (props) => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <>
            <Container>
                <div>
                    <AuthContext.Consumer>
                        {(context) =>
                            context.auth ? (
                                <p>Logged in!</p>
                            ) : (
                                <p>Please Login</p>
                            )
                        }
                    </AuthContext.Consumer>
                    <p onClick={props.click}>Product Name: {props.title}</p>
                    <p>Product Price: {props.price}</p>
                    <p>{props.children}</p>
                    <input
                        ref={inputRef}
                        type="text"
                        onChange={props.change}
                        value={props.title}
                    />
                </div>
            </Container>
        </>
    );
};

export default Wrapper(Product, "product");
