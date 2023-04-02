import React from "react";
import Wrapper from "../../hoc/Wrapper";

export default function Order(props) {
    const summery = Object.keys(props.products).map((item) => {
        return (
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        );
    });
    return (
        <Wrapper>
            <h3>Order</h3>
            <ul>{summery}</ul>
        </Wrapper>
    );
}
