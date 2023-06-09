import { useEffect, useState } from "react";
const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch("http://localhost:5000/orders");
            const responseData = await response.json();
            setOrders(responseData);
        };
        fetchOrders();
    }, []);

    return (
        <>
            <div>
                {orders.map((item) => (
                    <div key={item.id}>
                        {item.username} - {item.amount}
                    </div>
                ))}
            </div>
        </>
    );
};

export default OrderPage;
