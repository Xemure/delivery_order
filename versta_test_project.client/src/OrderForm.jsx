import React, { useState } from 'react';
import { createOrder } from './OrderService';

const OrderForm = ({ onOrderCreated }) => {
    const [order, setOrder] = useState({
        senderCity: '',
        senderAddress: '',
        receiverCity: '',
        receiverAddress: '',
        weight: '',
        pickupDate: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await createOrder(order);
            onOrderCreated();
            setOrder({
                senderCity: '',
                senderAddress: '',
                receiverCity: '',
                receiverAddress: '',
                weight: '',
                pickupDate: ''
            });
            setMessage(`Заказ успешно создан! Номер заказа: ${data.orderId}`);
        } catch (error) {
            setMessage('Ошибка при создании заказа.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Город отправителя:</label>
            <input type="text" name="senderCity" value={order.senderCity} onChange={handleChange} required />
            <label>Адрес отправителя:</label>
            <input type="text" name="senderAddress" value={order.senderAddress} onChange={handleChange} required />
            <label>Город получателя:</label>
            <input type="text" name="receiverCity" value={order.receiverCity} onChange={handleChange} required />
            <label>Адрес получателя:</label>
            <input type="text" name="receiverAddress" value={order.receiverAddress} onChange={handleChange} required />
            <label>Вес груза (кг):</label>
            <input type="number" name="weight" value={order.weight} onChange={handleChange} required />
            <label>Дата забора груза:</label>
            <input type="date" name="pickupDate" value={order.pickupDate} onChange={handleChange} required />
            <button type="submit">Заказать</button>
            {message && <div className="message">{message}</div>}
        </form>
    );
};

export default OrderForm;
