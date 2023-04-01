import { useState } from "react";
import Wrapper from "../../hoc/Wrapper";

const Shopping = () => {
    const [products, setProducts] = useState({
        products1: 0,
        products2: 0,
        products3: 0,
        products4: 0,
    });
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <Wrapper>
            <div>Controls</div>
        </Wrapper>
    );
};

export default Shopping;
