import Container from "../hoc/Container";
import Wrapper from "../hoc/Wrapper";
import "./Product.css";
const Product = (props) => {
    return (
        <>
            <Container>
                <div>
                    <p onClick={props.click}>Product Name: {props.title}</p>
                    <p>Product Price: {props.price}</p>
                    <p>{props.children}</p>
                    <input
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
