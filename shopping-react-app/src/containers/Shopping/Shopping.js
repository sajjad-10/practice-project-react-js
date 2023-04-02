import { useState } from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

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
            <Controls />
        </Wrapper>
    );
};

export default Shopping;
