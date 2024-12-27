import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTruck, faBox, faUndo, faPlay } from '@fortawesome/free-solid-svg-icons';
import productsData from './productsData';
import CheckoutForm from '../../checkout/CheckoutForm'; 

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [showCheckout, setShowCheckout] = useState(false); // State to show/hide checkout form

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors ? foundProduct.colors[0] : ''); // If colors exist
      setMainImage(foundProduct.image);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate]);

  if (!product) return null;

  const thumbnails = [
    product.image,
    '/placeholder.svg?height=100&width=100',
    '/placeholder.svg?height=100&width=100',
    '/placeholder.svg?height=100&width=100'
  ];

  const features = [
    { icon: faBox, title: "3 Days Warranty", description: "Brand Warranty" },
    { icon: faUndo, title: "Easy Returns", description: "Free of Charge" },
    { icon: faPlay, title: "Packaging Video", description: "See Your Product" },
    { icon: faTruck, title: "Fast Delivery", description: "All Over Pakistan" }
  ];

  const handleAddToCart = () => {
    setShowCheckout(true); // Show the checkout form when "Add to Cart" is clicked
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {thumbnails.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 
                    ${mainImage === image ? 'border-[#FF1493]' : 'border-gray-200'}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex text-[#FFC61C]">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className={i < Math.floor(product.rating) ? 'text-[#FFC61C]' : 'text-gray-300'} />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.reviews} Reviews
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">
                  Rs {product.currentPrice.toLocaleString()}
                </span>
                <span className="text-gray-500 line-through">
                  Rs {product.originalPrice.toLocaleString()}
                </span>
                <span className="text-green-600">
                  {product.discount}% OFF
                </span>
              </div>
              <p className="text-sm text-gray-500">Inclusive of all taxes</p>
            </div>

            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Colors</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-md border-2 
                        ${selectedColor === color ? 'border-[#FF1493]' : 'border-gray-200'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                className="flex-1 bg-[#FF1493] text-white py-3 rounded-md hover:bg-[#FF1493]/90"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-[#FF1493] text-[#FF1493] py-3 rounded-md hover:bg-[#FF1493]/10">
                Compare
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="h-12 w-12 mx-auto rounded-full bg-[#FF1493]/10 flex items-center justify-center mb-2">
                    <FontAwesomeIcon icon={feature.icon} className="text-[#FF1493] text-xl" />
                  </div>
                  <h4 className="font-medium">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCheckout && <CheckoutForm product={product} />} {/* Render the checkout form if showCheckout is true */}
    </div>
  );
};

export default ProductDetail;