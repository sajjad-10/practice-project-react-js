import Builder from "./Builder/Builder";
import "./Controls.css";

const products = [
    { title: "Product 1", type: "product1" },
    { title: "Product 2", type: "product2" },
    { title: "Product 3", type: "product3" },
    { title: "Product 4", type: "product4" },
];
const Controls = (props) => {
    return (
        <div className="controls">
            <p className="price">Total Price: {props.price}</p>
            {products.map((item) => {
                return (
                    <Builder
                        key={item.title}
                        title={item.title}
                        add={() => {
                            props.productAdd(item.type);
                        }}
                        remove={() => {
                            props.productRemove(item.type);
                        }}
                    />
                );
            })}
            <div className="order-btn" onClick={props.order}>
                Order
            </div>
        </div>
    );
};

export default Controls;
