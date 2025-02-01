import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import productsData from './productsData';
import CheckoutForm from '../../checkout/CheckoutForm';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.image);
      setSelectedVariant(foundProduct);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate]);

  if (!product) return null;

  const handleThumbnailClick = (variant) => {
    setMainImage(variant.image); // Update the main image
    setSelectedVariant(variant); // Update the selected variant
  };

  const handleAddToCart = () => {
    setShowCheckout(true);
  };

  const handleCheckoutSubmit = (formData) => {
    navigate('/order-complete', { state: { product: selectedVariant || product, formData } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {[product, ...product.variants.slice(0, 2)].map((variant, index) => (
                <button
                  key={index} // Unique key for each thumbnail
                  onClick={() => handleThumbnailClick(variant)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 
                    ${mainImage === variant.image ? 'border-[#FF1493]' : 'border-gray-200'}`}
                >
                  <img
                    src={variant.image}
                    alt={`${product.title} variant ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <p className="text-center text-gray-600 mt-2">
                    Rs {variant.currentPrice.toLocaleString()}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center gap-2">
              <div className="flex text-[#FFC61C]">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i < Math.floor(product.rating) ? 'text-[#FFC61C]' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.reviews} Reviews</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">
                  Rs {(selectedVariant?.currentPrice || product.currentPrice).toLocaleString()}
                </span>
                <span className="text-gray-500 line-through">
                  Rs {product.originalPrice.toLocaleString()}
                </span>
                <span className="text-green-600">{product.discountPercentage}% OFF</span>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-gray-600">Availability: </span>
              <span className="text-green-600 font-semibold">In Stock</span>
              <span className="text-gray-500 ml-2">Only 3 left</span>
            </div>

            <div className="flex gap-4">
              <button
                className="flex-1 bg-orange-400 text-white py-3 rounded-md hover:bg-orange-600/90"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="flex-1 bg-sky-400 text-black py-3 rounded-md hover:bg-sky-500/50">
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && <CheckoutForm product={selectedVariant || product} onSubmit={handleCheckoutSubmit} />}
    </div>
  );
};

export default ProductDetail;

