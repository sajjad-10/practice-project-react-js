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
            {products.map((item) => {
                return <Builder key={item.title} title={item.title} />;
            })}
        </div>
    );
};

export default Controls;
