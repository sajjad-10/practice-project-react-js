import './Product.css'
const Product = (props) => {
    return (
        <div className='product'>
            <p>Product Name: {props.title}</p>
            <p onClick={props.click}>Product Name: {props.price}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default Product;
