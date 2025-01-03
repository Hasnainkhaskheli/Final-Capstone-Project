import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, { ...order, status: 'Processing' }]);
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(orders.map(order => order.product.id === orderId ? { ...order, status } : order));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};