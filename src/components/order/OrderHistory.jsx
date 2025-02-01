import React, { useContext } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { OrderContext } from './OrderContext';

const OrderHistory = () => {
  const { orders, removeOrder } = useContext(OrderContext);

  const orderHistory = orders.filter(order => order.status === 'Delivered');

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Paper className="max-w-4xl mx-auto p-6">
          <Typography variant="h4" className="mb-6">
            Order History
          </Typography>
          {orderHistory.length > 0 ? (
            <ul>
              {orderHistory.map((order) => (
                <li key={order.id} style={{ marginBottom: '20px' }}>
                  <Typography variant="h6">
                    Order Number: {order.id}
                  </Typography>
                  <Typography>
                    Product: {order.product.name}
                  </Typography>
                  <Typography>
                    Status: {order.status}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => removeOrder(order.id)}
                  >
                    Remove Order
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <Typography>No delivered orders found.</Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderHistory;
