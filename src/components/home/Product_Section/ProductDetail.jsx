import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
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
            <div className="mt-4">
               <span className="text-gray-600">Availability: </span>
                <span className="text-green-600 font-semibold">In Stock</span>
              <span className="text-gray-500 ml-2">Only 3 left</span>
           </div>
           <div className="mt-4">
              <span className="text-gray-600">Colors</span>
               <div className="flex items-center mt-2">
                   <div className="border-2 border-blue-500 rounded-lg p-2">
                       <img src="https://placehold.co/50x50" alt="Black Color" className="w-8 h-8" />
                  </div>
                   <span className="ml-2">Black</span>
                </div>
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

      {showCheckout && <CheckoutForm product={product} />} {/* Render the checkout form if showCheckout is true */}
    </div>
  ); 

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
//         <div className="flex flex-col items-center md:items-start md:w-1/2">
//             <div className="border rounded-lg p-4">
//                 <img src="https://placehold.co/300x400" alt="VGR Zero T-Blade Trimmer" className="w-full h-auto" />
//             </div>
//             <div className="flex space-x-2 mt-4">
//                 <img src="https://placehold.co/50x50" alt="Thumbnail 1" className="border rounded-lg" />
//                 <img src="https://placehold.co/50x50" alt="Thumbnail 2" className="border rounded-lg" />
//                 <img src="https://placehold.co/50x50" alt="Thumbnail 3" className="border rounded-lg" />
//             </div>
//         </div>
//         <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
//             <h1 className="text-2xl font-semibold">VGR Zero T-Blade Trimmer - V-030</h1>
//             <div className="flex items-center mt-2">
//                 <div className="flex items-center">
//                     <i className="fas fa-star text-yellow-500"></i>
//                     <i className="fas fa-star text-yellow-500"></i>
//                     <i className="fas fa-star text-yellow-500"></i>
//                     <i className="fas fa-star-half-alt text-yellow-500"></i>
//                     <i className="far fa-star text-yellow-500"></i>
//                 </div>
//                 <span className="ml-2 text-gray-600">3.7 | 1 Review</span>
//             </div>
//             <div className="mt-4">
//                 <span className="text-gray-500 line-through">Rs 5,500</span>
//                 <span className="text-3xl font-bold text-red-600 ml-2">Rs 2,559</span>
//                 <span className="text-green-500 ml-2">53% OFF</span>
//             </div>
//             <div className="mt-4">
//                 <span className="text-gray-600">Availability: </span>
//                 <span className="text-green-600 font-semibold">In Stock</span>
//                 <span className="text-gray-500 ml-2">Only 3 left</span>
//             </div>
//             <div className="mt-4">
//                 <span className="text-gray-600">Colors</span>
//                 <div className="flex items-center mt-2">
//                     <div className="border-2 border-blue-500 rounded-lg p-2">
//                         <img src="https://placehold.co/50x50" alt="Black Color" className="w-8 h-8" />
//                     </div>
//                     <span className="ml-2">Black</span>
//                 </div>
//             </div>
//             <div className="flex space-x-4 mt-6">
//                 <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Compare</button>
//             </div>
//         </div>
//     </div>
// );
};

export default ProductDetail;