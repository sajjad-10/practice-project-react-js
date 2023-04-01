import AuthContext from "../../context/auth-context";
import "./Product.css";
const Product = (props) => {
    return (
        <div className="product">
            <AuthContext.Consumer>
                {(context) =>
                    context.auth ? <p>Logged in!</p> : <p>Please Login!</p>
                }
            </AuthContext.Consumer>
            <p onClick={props.click}>Product Name: {props.title}</p>
            <p>Product Name: {props.price}</p>
            <p>{props.children}</p>
            <input
                type="text"
                value={props.title}
                onChange={props.change}
            ></input>
        </div>
    );
};

export default Product;
