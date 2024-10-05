import React, { useEffect, useState } from 'react';
import './App.css';
import OrderForm from './OrderForm';
import OrderList from './OrderList';
import OrderView from './OrderView';
import { getOrders } from './OrderService';

function App() {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const fetchOrders = async () => {
        const data = await getOrders();
        setOrders(data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    const handleCloseOrderView = () => {
        setSelectedOrder(null);
    };

    return (
        <div className="container">
            <div className="order-form">
                <OrderForm onOrderCreated={fetchOrders} />
            </div>
            <div className="order-list">
                <OrderList orders={orders} onOrderClick={handleOrderClick} />
            </div>
            {selectedOrder && (
                <OrderView order={selectedOrder} onClose={handleCloseOrderView} />
            )}
        </div>
    );
}

export default App;
