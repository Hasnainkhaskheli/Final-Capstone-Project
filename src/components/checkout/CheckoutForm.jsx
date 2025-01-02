import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = ({ product, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ring-blue-500${errors.name ? 'focus:ring-red-500' : 'focus:ring-[#FF1493]'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Address</label>
            <input
              type="text"
              {...register('address', { required: 'Address is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ring-blue-500${errors.address ? 'focus:ring-red-500' : 'focus:ring-[#FF1493]'}`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ring-blue-500${errors.email ? 'focus:ring-red-500' : 'focus:ring-[#FF1493]'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Phone</label>
            <input
              type="text"
              {...register('phone', { required: 'Phone is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ring-blue-500${errors.phone ? 'focus:ring-red-500' : 'focus:ring-[#FF1493]'}`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Province</label>
            <input
              type="text"
              {...register('province', { required: 'Province is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ring-blue-500${errors.province ? 'focus:ring-red-500' : 'focus:ring-[#FF1493]'}`}
            />
            {errors.province && <p className="text-red-500 text-sm mt-1">{errors.province.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">City</label>
            <input
              type="text"
              {...register('city', { required: 'City is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ring-blue-500${errors.city ? 'focus:ring-red-500' : 'focus:ring-[#FF1493]'}`}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Delivery Type</label>
            <select
              {...register('deliveryType', { required: 'Delivery Type is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ring-blue-500${errors.deliveryType ? 'focus:ring-red-500' : 'focus:ring-[#FF1493]'}`}
            >
              <option value="Standard Shipping">Standard Shipping</option>
              <option value="Express Shipping">Express Shipping</option>
            </select>
            {errors.deliveryType && <p className="text-red-500 text-sm mt-1">{errors.deliveryType.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#4da6ff] text-white py-3 rounded-lg font-semibold hover:bg-[#4da6ff]/90 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;