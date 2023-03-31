import './Product.css'
const Product = (props) => {
    return (
        <div className='product'>
            <p>Product Name: {props.title}</p>
            <p onClick={props.click}>Product Name: {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}></input>
        </div>
    );
};

export default Product;
