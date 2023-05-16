import { useState } from "react";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
const Shopping = (props) => {
    const [products, useProducts] = useState({
        product1: 0,
        product2: 0,
        product3: 0,
        product4: 0,
    });
    const [totalPrice, setTotalPrice] = useState(0)

    return (
        <Wrapper>
            <Controls/>
        </Wrapper>
    );
};

export default Shopping;
