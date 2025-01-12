import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { CartContext } from '@/contexts/CartContext';
import { ClockLoader } from 'react-spinners';


const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;
     const { addToCart, updateQuantity, cartItems } = useContext(CartContext);

    // Mock product data (replace with your actual data source)
     const products = [
         { id: 1, name: 'Parry\'s White Label Sugar', packSize: '20kg', price: 860, description: 'Parry\'s White Label Sugar is a premium refined sugar crafted from high-quality sugarcane, offering sparkling white crystals with fine granules that dissolve quickly. Perfect for sweetening beverages, baking, and cooking, it enhances the flavor of every dish with consistent sweetness. Suitable for households and professional kitchens alike, it’s a trusted choice for all your culinary needs.', imageUrl: '/images/product1.jpg' },
         { id: 2, name: 'Parry\'s White Label Sugar', packSize: '1kg', price: 43, description: 'Parry\'s White Label Sugar is a premium refined sugar crafted from high-quality sugarcane, offering sparkling white crystals with fine granules that dissolve quickly. Perfect for sweetening beverages, baking, and cooking, it enhances the flavor of every dish with consistent sweetness. Suitable for households and professional kitchens alike, it’s a trusted choice for all your culinary needs.', imageUrl: '/images/product2.jpg' },
          { id: 3, name: 'Parry\'s HMT Rice Deluxe', packSize: '26kg', price: 1450, description: 'Parry\'s HMT Rice Deluxe is a premium-quality rice variety known for its superior taste, aroma, and fluffy texture. Perfect for everyday meals or special occasions, this rice cooks evenly and absorbs flavors beautifully, making it ideal for biryanis, pulao, and other traditional dishes. Sourced from the finest grains, it ensures consistent quality and a delightful dining experience for your family.', imageUrl: '/images/product3.png' },
          { id: 4, name: 'Parry\'s JSR Lachkari Kolam Rice', packSize: '26kg', price: 1650, description: 'Parry\'s JSR Lachkari Kolam Rice is a premium short-grain rice variety renowned for its soft texture, delicate aroma, and light, fluffy consistency. Ideal for everyday cooking, it pairs perfectly with curries, dals, and a variety of dishes. Its fine quality and authentic taste make it a staple for families who value nutritious and flavorful meals.', imageUrl: '/images/product4.png' },
        { id: 5, name: 'Parry\'s URAD Dal', packSize: '30kg', price: 3360, description: 'Parry\'s URAD Dal is a high-quality split black gram that is rich in protein and essential nutrients. It is perfect for preparing traditional Indian recipes like dal makhani, idlis, dosas, and vadas. With its smooth texture and consistent cooking quality, this urad dal brings wholesome nutrition and authentic taste to your meals.', imageUrl: '/images/product5.jpg' },
          { id: 6, name: 'Parry\'s URAD Dal', packSize: '1kg', price: 122, description: 'Parry\'s URAD Dal is a high-quality split black gram that is rich in protein and essential nutrients. It is perfect for preparing traditional Indian recipes like dal makhani, idlis, dosas, and vadas. With its smooth texture and consistent cooking quality, this urad dal brings wholesome nutrition and authentic taste to your meals.', imageUrl: '/images/product6.jpg' },
         { id: 7, name: 'Parry\'s TOOR Dal', packSize: '30kg', price: 4020, description: 'Parry\'s TOOR Dal is a premium-grade pigeon pea lentil, carefully processed to retain its natural taste and nutritional value. Perfect for making hearty dals, sambhars, and other Indian delicacies, it cooks to a creamy consistency, adding richness to your dishes. Parry\'s TOOR Dal is a trusted choice for wholesome, delicious meals every day.', imageUrl: '/images/product7.jpg' },
         { id: 8, name: 'Parry\'s TOOR Dal', packSize: '1kg', price: 140, description: 'Parry\'s TOOR Dal is a premium-grade pigeon pea lentil, carefully processed to retain its natural taste and nutritional value. Perfect for making hearty dals, sambhars, and other Indian delicacies, it cooks to a creamy consistency, adding richness to your dishes. Parry\'s TOOR Dal is a trusted choice for wholesome, delicious meals every day.', imageUrl: '/images/product8.jpg' }
     ];


    const product = products.find((p) => p.id === parseInt(id));
     const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const [loading, setLoading] = useState(false)


    const handleQuantityChange = (e) => {
      setQuantity(parseInt(e.target.value, 10));
    };

     const handleAddToCart = () => {
        setLoading(true)
      const existingItem = cartItems.find(item => item.id === product.id);
        if(existingItem){
            updateQuantity(product.id, existingItem.quantity + quantity)
       } else {
             addToCart(product, quantity);
          }
        setIsAdded(true);

       setTimeout(() => {
          setIsAdded(false);
             setLoading(false)
         }, 1000);
     };

     if (!product) {
       return <div className="text-center mt-8">Product not found</div>;
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
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row">
               <div className="sm:w-1/2 mr-6">
                    <img
                        src={product.imageUrl}
                       alt={product.name}
                          className="object-cover w-full rounded-md"
                     />
                </div>
                <div className="sm:w-1/2">
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                      <p className="text-gray-600 mb-4">Pack Size: {product.packSize}</p>
                    <p className="text-gray-600 mb-4">Price: ₹{product.price}</p>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="flex items-center mb-4">
                          <label htmlFor="quantity" className="mr-2 font-semibold">Quantity:</label>
                           <input
                             type="number"
                             id="quantity"
                               className="border border-gray-300 rounded px-2 py-1 w-20"
                                value={quantity}
                                  onChange={handleQuantityChange}
                                min="1"
                           />
                     </div>
                     <button onClick={handleAddToCart} disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative">
                       {loading ? <ClockLoader color="#fff" loading={loading} size={20}  /> : "Add to Cart"}
                     </button>
                   {isAdded && (
                      <div className="bg-green-100 text-green-800 border border-green-400 rounded-md p-2 mt-2 absolute left-0 transform translate-y-8  opacity-90 transition-opacity duration-1000">
                           Added to cart
                      </div>
                    )}
                </div>
             </div>
           </div>
       </main>
    );
};

export default ProductPage;
