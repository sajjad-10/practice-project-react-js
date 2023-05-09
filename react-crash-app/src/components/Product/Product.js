import Container from "../hoc/Container";
import "./Product.css";
const Product = (props) => {
    return (
        <>
            <Container>
                <div className="product">
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

export default Product;
