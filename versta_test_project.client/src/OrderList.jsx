import React from 'react';
import './App.css';

const OrderList = ({ orders, onOrderClick }) => {
    return (
        <>
            <h2>Список заказов</h2>
            <table>
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Город отправителя</th>
                        <th>Адрес отправителя</th>
                        <th>Город получателя</th>
                        <th>Адрес получателя</th>
                        <th>Вес груза (кг)</th>
                        <th>Дата забора груза</th>
                    </tr>
                </thead>
                <tbody className="table-container">
                    {orders.map(order => (
                        <tr key={order.id} onClick={() => onOrderClick(order)} style={{ cursor: 'pointer' }}>
                            <td>{order.id}</td>
                            <td>{order.senderCity}</td>
                            <td>{order.senderAddress}</td>
                            <td>{order.receiverCity}</td>
                            <td>{order.receiverAddress}</td>
                            <td>{order.weight}</td>
                            <td>{new Date(order.pickupDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default OrderList;
