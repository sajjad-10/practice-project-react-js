import Wrapper from "../../hoc/Wrapper";
const Order = (props) => {
  const summery =  Object.keys(props.products).map((item) => {
        return (
            <li key={item}>                
                {item}: {props.products[item]}
            </li>
        );
    });
    return (
        <Wrapper>
            <h3>Order</h3>
            <ul>{summery}</ul>
        </Wrapper>
    );
};

export default Order;
