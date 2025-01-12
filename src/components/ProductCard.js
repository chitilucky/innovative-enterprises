import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/products/${product.id}`}>
                <div className="flex items-center p-4">
                    <div className="w-24 h-24 mr-4">
                        <img
                            src={product.imageUrl}
                           alt={product.name}
                             className="object-cover w-full h-full"
                          />
                     </div>
                     <div>
                           <h2 className="text-xl font-semibold text-gray-800">
                                {product.name}
                          </h2>
                            <p className="text-gray-600">₹{product.price}</p>
                             <p className="text-gray-600">Pack Size: {product.packSize}</p>
                    </div>
                  </div>
            </Link>
        </div>
    );
};

export default ProductCard;