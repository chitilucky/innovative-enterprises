import React, { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '@/contexts/CartContext';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

    const calculateSubtotal = (item) => {
        return item.price * item.quantity;
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
    };

   const handleQuantityChange = (productId, newQuantity) => {
       if (newQuantity >= 1) {
          updateQuantity(productId, newQuantity);
       }
   };

    if(cartItems.length === 0) {
       return(
          <main className="bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8">
                 <div className="mb-4">
                     <Link href="/products" className="inline-flex items-center text-blue-500 hover:text-blue-700">
                         <ArrowLeftIcon className="h-5 w-5 mr-1"/>
                         Back to Products
                    </Link>
               </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart</h1>
                <p className="text-gray-600">Your cart is empty</p>
             </div>
         </main>
      )
    }


     return (
        <main className="bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8">
                 <div className="mb-4">
                     <Link href="/products" className="inline-flex items-center text-blue-500 hover:text-blue-700">
                         <ArrowLeftIcon className="h-5 w-5 mr-1"/>
                          Back to Products
                     </Link>
                </div>
               <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart</h1>
               <div className="bg-white rounded-lg shadow-md p-6">
                  <ul className="mb-4">
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-2 mb-2 last:border-b-0">
                            <div className="flex items-center mb-2 sm:mb-0">
                               <img
                                   src={item.imageUrl}
                                    alt={item.name}
                                     className="object-cover w-16 h-16 mr-4 rounded-md"
                               />
                                 <div>
                                      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                      <p className="text-gray-600">Pack Size: {item.packSize}</p>
                                   <p className="text-gray-600">Price: ₹{item.price}</p>
                                </div>
                           </div>
                           <div className="flex items-center text-right  sm:text-left mt-2 sm:mt-0 ">
                               <input
                                 type="number"
                                   className="border border-gray-300 rounded px-2 py-1 w-20 mr-2"
                                    value={item.quantity}
                                    min="1"
                                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                               />
                             <span className="text-gray-700 mr-2">x ₹{item.price}</span>
                             <span className="text-gray-700 font-semibold">₹{calculateSubtotal(item)}</span>
                                <button
                                  className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
                                     onClick={() => removeFromCart(item.id)}
                               >
                                 Remove
                               </button>
                           </div>
                        </li>
                     ))}
                 </ul>
               <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    <span className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">Total:</span>
                   <span className="text-3xl font-bold text-gray-800">₹{calculateTotal()}</span>
               </div>
              <div className="flex justify-between items-center mt-4">
                   <button onClick={clearCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Clear Cart</button>
               </div>
            </div>
          </div>
    </main>
 );
};

export default CartPage;