import React, { useContext, useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from './OrderContext';

const OrderTracking = () => {
  const { orders, updateOrderStatus } = useContext(OrderContext);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();

  const handleUpdateStatus = (orderId, status) => {
    updateOrderStatus(orderId, status);
    if (status === 'Delivered') {
      alert('Order successfully delivered and moved to history.');
      navigate('/order-history'); // Navigate to Order History page
    }
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleBackClick = () => {
    setSelectedOrder(null);
  };

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Paper className="max-w-4xl mx-auto p-6">
          <Typography variant="h4" className="mb-6">
            Order Tracking
          </Typography>
          {selectedOrder ? (
            <Box>
              <Typography variant="h6">
                Order Number: {selectedOrder.product.id}
              </Typography>
              <Typography>
                Product: {selectedOrder.product.name}
              </Typography>
              <Typography>
                Status: {selectedOrder.status}
              </Typography>
              <Typography>
                Name: {selectedOrder.formData.name}
              </Typography>
              <Typography>
                Email: {selectedOrder.formData.email}
              </Typography>
              <Typography>
                Phone: {selectedOrder.formData.phone}
              </Typography>
              <Typography>
                Address: {selectedOrder.formData.address}
              </Typography>
              <Typography>
                Province: {selectedOrder.formData.province}
              </Typography>
              <Typography>
                City: {selectedOrder.formData.city}
              </Typography>
              <Typography>
                Delivery Type: {selectedOrder.formData.deliveryType}
              </Typography>
              <Typography>
                Market Price: Rs {selectedOrder.product.originalPrice ? selectedOrder.product.originalPrice.toLocaleString() : 'N/A'}
              </Typography>
              <Typography>
                Sale Price: Rs {selectedOrder.product.currentPrice ? selectedOrder.product.currentPrice.toLocaleString() : 'N/A'}
              </Typography>
              <Typography>
                You're saving: Rs {selectedOrder.product.originalPrice && selectedOrder.product.currentPrice ? (selectedOrder.product.originalPrice - selectedOrder.product.currentPrice).toLocaleString() : 'N/A'} on this order
              </Typography>
              <Typography>
                Total Price: Rs {selectedOrder.product.currentPrice ? selectedOrder.product.currentPrice.toLocaleString() : 'N/A'}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUpdateStatus(selectedOrder.product.id, 'Delivered')}
              >
                Mark as Delivered
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleBackClick}
                style={{ marginLeft: '10px' }}
              >
                Back to Orders
              </Button>
            </Box>
          ) : (
            orders.length > 0 ? (
              <ul>
                {orders.map((order, index) => (
                  <li key={index} style={{ marginBottom: '20px' }}>
                    <Typography variant="h6">
                      Order Number: {order.product.id}
                    </Typography>
                    <Typography>
                      Product: {order.product.name}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOrderClick(order)}
                    >
                      View Order
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography>No orders found.</Typography>
            )
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderTracking;