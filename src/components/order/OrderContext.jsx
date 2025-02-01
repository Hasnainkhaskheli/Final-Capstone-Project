// import React, { createContext, useState, useEffect } from 'react';

// export const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState(() => {
//     const savedOrders = localStorage.getItem('orderHistory');
//     return savedOrders ? JSON.parse(savedOrders) : [];
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem('orderHistory', JSON.stringify(orders));
//     } catch (e) {
//       if (e.name === 'QuotaExceededError') {
//         console.error('LocalStorage quota exceeded');
//       }
//     }
//   }, [orders]);

//   const addOrder = (order) => {
//     setOrders((prevOrders) => {
//       // Check if the order already exists
//       const existingOrder = prevOrders.find(o => o.product.id === order.product.id);

//       if (existingOrder) {
//         return prevOrders; // Prevent duplicate order of the same product
//       }

//       return [...prevOrders, { ...order, id: Date.now(), status: 'Order Placed' }];
//     });
//   };

//   const removeOrder = (orderId) => {
//     setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
//   };

//   const updateOrderStatus = (orderId, status) => {
//     setOrders((prevOrders) =>
//       prevOrders.map(order =>
//         order.id === orderId ? { ...order, status } : order
//       )
//     );
//   };

//   return (
//     <OrderContext.Provider value={{ orders, addOrder, removeOrder, updateOrderStatus }}>
//       {children}
//     </OrderContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orderHistory');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('orderHistory', JSON.stringify(orders));
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        console.error('LocalStorage quota exceeded');
      }
    }
  }, [orders]);

  const addOrder = (order) => {
    setOrders(() => [{ ...order, id: Date.now(), status: 'Order Placed' }]); 
    // 👆 Now, this ensures that only one order is stored at a time
  };

  const removeOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders((prevOrders) =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};
