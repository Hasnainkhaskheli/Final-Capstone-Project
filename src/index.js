// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Layout from './components/layout/layout';
// import Register from './components/auth/sign-up';
// import Login from './components/auth/sign-in';
// import ProtectedRoute from './components/protected/ProtectedRoutedNew';
// import MyAccount from './components/My-account/Account-Management'; 
// import UpdateProfile from './components/My-account/Updated-Profile';
// import ProductSection from './components/home/Product_Section/ProductSection';
// import ProductDetail from './components/home/Product_Section/ProductDetail';
// import CheckoutForm from './components/checkout/CheckoutForm';
// import OrderComplete from './components/order/OrderComplete';
// import ErrorPage from './components/home/ErrorPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "",
//         element: <App />,
//       },
//       {
//         path: "sign-up",
//         element: <Register />,
//       },
//       {
//         path: "sign-in",
//         element: <Login />,
//       },
//       {
//         path: "account",
//         element: (
//           <ProtectedRoute>
//             <MyAccount />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "profile",
//         element: (
//           <ProtectedRoute>
//             <UpdateProfile />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "products",
//         element: <ProductSection />,
//       },
//       {
//         path: "product/:id",
//         element: <ProductDetail />,
//       },
//       {
//         path: "checkout",
//         element: (
//           <ProtectedRoute>
//             <CheckoutForm />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "order-complete",
//         element: (
//           <ProtectedRoute>
//             <OrderComplete />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout';
import Register from './components/auth/sign-up';
import Login from './components/auth/sign-in';
import ProtectedRoute from './components/protected/ProtectedRoutedNew';
import MyAccount from './components/My-account/Account-Management'; 
import UpdateProfile from './components/My-account/Updated-Profile';
import ProductSection from './components/home/Product_Section/ProductSection';
import ProductDetail from './components/home/Product_Section/ProductDetail';
import CheckoutForm from './components/checkout/CheckoutForm';
import OrderComplete from './components/order/OrderComplete';
import ErrorPage from './components/home/ErrorPage';
import { OrderProvider } from './components/order/OrderContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "sign-up",
        element: <Register />,
      },
      {
        path: "sign-in",
        element: <Login />,
      },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <MyAccount />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: <ProductSection />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <CheckoutForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "order-complete",
        element: (
          <ProtectedRoute>
            <OrderComplete />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OrderProvider>
    <RouterProvider router={router} />
  </OrderProvider>
);