
import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Paper, Button, Stepper, Step, StepLabel } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { OrderContext } from './OrderContext';

const OrderComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, formData } = location.state || {};
  const { updateOrderStatus } = useContext(OrderContext);

  const [orderStatus, setOrderStatus] = useState(0);
  const steps = ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

  useEffect(() => {
    if (orderStatus < steps.length - 1) {
      const timer = setTimeout(() => {
        setOrderStatus(orderStatus + 1);
        if (orderStatus + 1 === steps.length - 1) {
          updateOrderStatus(product.id, 'Completed');
          sendSMS(formData.phone, `Your order for ${product.name} has been delivered!`);
        }
      }, 3000); // 3 seconds for demo purposes
      return () => clearTimeout(timer);
    } else {
      navigate(`/order-details`, { state: { order: { product, formData, status: 'Delivered' } } });
    }
  }, [orderStatus, steps.length, product, updateOrderStatus, formData, navigate]);
  
  const sendSMS = (phone, message) => {
    // Simulating an SMS API call
    console.log(`SMS sent to ${phone}: ${message}`);
  };
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Paper className="max-w-4xl mx-auto p-6">
          <Box className="mb-6">
            <Typography variant="h4" className="mb-2">
              Order Receipt
            </Typography>
            <Box className="bg-blue-500 text-white p-4 rounded-lg">
              <Typography variant="h6">
                Order Number 1553473, {product?.name}
              </Typography>
            </Box>
          </Box>

          <Box className="grid md:grid-cols-3 gap-8">
            <Box className="md:col-span-2 space-y-6">
              <Box>
                <Typography variant="h6" className="mb-2">
                  Contact Details
                </Typography>
                <Box className="grid grid-cols-3 gap-4">
                  <Box>
                    <Typography color="textSecondary">Name</Typography>
                    <Typography>{formData?.name}</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">Email</Typography>
                    <Typography>{formData?.email}</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">Phone</Typography>
                    <Typography>{formData?.phone}</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">Address</Typography>
                    <Typography>{formData?.address}</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">Province</Typography>
                    <Typography>{formData?.province}</Typography>
                  </Box>
                  <Box>
                    <Typography color="textSecondary">City</Typography>
                    <Typography>{formData?.city}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Typography variant="h6" className="mb-2">
                  Delivery Information
                </Typography>
                <Box className="grid grid-cols-3 gap-4">
                  <Box>
                    <Typography color="textSecondary">Delivery Type</Typography>
                    <Typography>{formData?.deliveryType}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="space-y-4">
              <Box className="flex gap-4">
                <img
                  src={product?.image || "/placeholder.svg?height=80&width=80"}
                  alt="Product"
                  className="w-20 h-20 rounded-lg"
                />
                <Box>
                  <Typography variant="subtitle1">{product?.name}</Typography>
                  <Typography color="textSecondary">Color: {product?.color || 'N/A'}</Typography>
                  <Typography color="textSecondary">
                    {product?.storage || 'N/A'}
                  </Typography>
                </Box>
              </Box>

              <Box className="space-y-2 border-t pt-4">
                <Box className="flex justify-between">
                  <Typography>Market Price</Typography>
                  <Typography className="line-through">Rs {product?.originalPrice?.toLocaleString()}</Typography>
                </Box>
                <Box className="flex justify-between">
                  <Typography>Sale Price</Typography>
                  <Typography>Rs {product?.currentPrice?.toLocaleString()}</Typography>
                </Box>
                <Box className="flex justify-between text-green-600">
                  <Typography>Delivery Charges</Typography>
                  <Typography>Rs 0</Typography>
                </Box>
                <Box className="flex justify-between text-green-600">
                  <Typography>You're saving</Typography>
                  <Typography>Rs {(product?.originalPrice - product?.currentPrice)?.toLocaleString()} on this order</Typography>
                </Box>
                <Box className="flex justify-between font-medium pt-2 border-t">
                  <Typography>Total Price</Typography>
                  <Typography>Rs {product?.currentPrice?.toLocaleString()}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="mt-8">
            <Typography variant="h6" className="mb-4">
              Track Your Order
            </Typography>
            <Stepper activeStep={orderStatus} alternativeLabel>
           {steps.map((label) => (
              <Step key={label}><StepLabel>{label}</StepLabel></Step>
            ))}
         </Stepper>
          </Box>

          <Box className="mt-8 flex justify-end">
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

export default OrderComplete;

// import React, { useState, useEffect, useContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Box, Typography, Paper, Button, Stepper, Step, StepLabel } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';
// import { OrderContext } from './OrderContext';

// const OrderComplete = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product, formData } = location.state || {};
//   const { addOrder } = useContext(OrderContext);

//   const [orderStatus, setOrderStatus] = useState(0);
//   const steps = ['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

//   useEffect(() => {
//     if (orderStatus < steps.length - 1) {
//       const timer = setTimeout(() => {
//         setOrderStatus(orderStatus + 1);

//         if (orderStatus + 1 === steps.length - 1) {
//           addOrder({ product, formData, status: 'Delivered' });
//           sendOrderCompletionMessage(formData.phone); // Send SMS
//           setTimeout(() => navigate('/order-details', { state: { order: { product, formData, status: 'Delivered' } } }), 3000);
//         }
//       }, 3000); // Simulating steps
//       return () => clearTimeout(timer);
//     }
//   }, [orderStatus, product, formData, addOrder, navigate]);

//   const sendOrderCompletionMessage = (phone) => {
//     // Placeholder for sending SMS
//     console.log(`Message sent to ${phone}: Your order has been delivered.`);
//   };

//   const handlePrint = () => window.print();

//   return (
//     <Box className="min-h-screen bg-gray-50 py-8">
//       <Box className="container mx-auto px-4">
//         <Paper className="max-w-4xl mx-auto p-6">
//           <Typography variant="h4" className="mb-4">Order Receipt</Typography>
//           <Box className="bg-blue-500 text-white p-4 rounded-lg mb-6">
//             <Typography variant="h6">Order Number: 1553473, {product?.name}</Typography>
//           </Box>
//           <Stepper activeStep={orderStatus} alternativeLabel>
//             {steps.map((label) => (
//               <Step key={label}><StepLabel>{label}</StepLabel></Step>
//             ))}
//           </Stepper>
//           <Box className="mt-8 flex justify-end">
//             <Button variant="outlined" startIcon={<PrintIcon />} onClick={handlePrint}>
//               Print Receipt
//             </Button>
//           </Box>
//         </Paper>
//       </Box>
//     </Box>
//   );
// };

// export default OrderComplete;
