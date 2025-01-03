import React, { useContext,} from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { OrderContext } from './OrderContext';

const OrderTracking = () => {
  const { orders } = useContext(OrderContext);

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Paper className="max-w-4xl mx-auto p-6">
          <Typography variant="h4" className="mb-6">
            Order Tracking
          </Typography>
          {orders.length > 0 ? (
            <ul>
              {orders.map((order, index) => (
                <li key={index} style={{ marginBottom: '20px' }}>
                  <Typography variant="h6">
                    Order Number: {order.product.id}
                  </Typography>
                  <Typography>
                    Product: {order.product.name}
                  </Typography>
                  <Typography>
                    Status: {order.status}
                  </Typography>
                  <Typography>
                    Name: {order.formData.name}
                  </Typography>
                  <Typography>
                    Email: {order.formData.email}
                  </Typography>
                  <Typography>
                    Phone: {order.formData.phone}
                  </Typography>
                  <Typography>
                    Address: {order.formData.address}
                  </Typography>
                  <Typography>
                    Province: {order.formData.province}
                  </Typography>
                  <Typography>
                    City: {order.formData.city}
                  </Typography>
                  <Typography>
                    Delivery Type: {order.formData.deliveryType}
                  </Typography>
                  <Typography>
                    Market Price: Rs {order.product.originalPrice.toLocaleString()}
                  </Typography>
                  <Typography>
                    Sale Price: Rs {order.product.currentPrice.toLocaleString()}
                  </Typography>
                  <Typography>
                    You're saving: Rs {(order.product.originalPrice - order.product.currentPrice).toLocaleString()} on this order
                  </Typography>
                  <Typography>
                    Total Price: Rs {order.product.currentPrice.toLocaleString()}
                  </Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Typography>No orders found.</Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderTracking; 

