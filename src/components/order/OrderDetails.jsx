import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

const OrderDetails = () => {
  const location = useLocation();
  const { order } = location.state || {};

  const handlePrint = () => {
    window.print();
  };

  if (!order) {
    return (
      <Box className="min-h-screen bg-gray-50 py-8">
        <Box className="container mx-auto px-4">
          <Paper className="max-w-4xl mx-auto p-6">
            <Typography variant="h4" className="mb-6">
              Order Details
            </Typography>
            <Typography>No order details available.</Typography>
          </Paper>
        </Box>
      </Box>
    );
  }

  const { product, formData, status } = order;

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Paper className="max-w-4xl mx-auto p-6">
          <Typography variant="h4" className="mb-6">
            Order Details
          </Typography>
          <Typography variant="h6">
            Order Number: {product?.id}
          </Typography>
          <Typography>
            Product: {product?.name}
          </Typography>
          <Typography>
            Status: {status}
          </Typography>
          <Typography>
            Name: {formData?.name}
          </Typography>
          <Typography>
            Email: {formData?.email}
          </Typography>
          <Typography>
            Phone: {formData?.phone}
          </Typography>
          <Typography>
            Address: {formData?.address}
          </Typography>
          <Typography>
            Province: {formData?.province}
          </Typography>
          <Typography>
            City: {formData?.city}
          </Typography>
          <Typography>
            Delivery Type: {formData?.deliveryType}
          </Typography>
          <Typography>
            Market Price: Rs {product?.originalPrice?.toLocaleString() || 'N/A'}
          </Typography>
          <Typography>
            Sale Price: Rs {product?.currentPrice?.toLocaleString() || 'N/A'}
          </Typography>
          <Typography>
            You're saving: Rs {(product?.originalPrice - product?.currentPrice)?.toLocaleString() || 'N/A'} on this order
          </Typography>
          <Typography>
            Total Price: Rs {product?.currentPrice?.toLocaleString() || 'N/A'}
          </Typography>

          <Box className="mt-8">
            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              className="!normal-case"
              onClick={handlePrint}
            >
              Print Receipt
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderDetails;