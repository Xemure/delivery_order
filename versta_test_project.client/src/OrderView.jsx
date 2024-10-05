import React from 'react';

const OrderView = ({ order, onClose }) => {
    if (!order) {
        return null;
    }

    return (
        <div className="order-view-overlay">
            <div className="order-view-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Просмотр заказа</h2>
                <p>Номер заказа: {order.id}</p>
                <p>Город отправителя: {order.senderCity}</p>
                <p>Адрес отправителя: {order.senderAddress}</p>
                <p>Город получателя: {order.receiverCity}</p>
                <p>Адрес получателя: {order.receiverAddress}</p>
                <p>Вес груза: {order.weight}</p>
                <p>Дата забора груза: {new Date(order.pickupDate).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default OrderView;
