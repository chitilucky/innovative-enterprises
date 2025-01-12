import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import { ClockLoader } from 'react-spinners';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);
     const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
       // Add a delay to simulate the API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProducts([
              { id: 1, name: 'Parry\'s White Label Sugar', packSize: '25kg', price: 1075, description: 'Parry\'s White Label Sugar is a premium refined sugar crafted from high-quality sugarcane, offering sparkling white crystals with fine granules that dissolve quickly. Perfect for sweetening beverages, baking, and cooking, it enhances the flavor of every dish with consistent sweetness. Suitable for households and professional kitchens alike, it’s a trusted choice for all your culinary needs.', imageUrl: '/images/product1.jpg' },
                { id: 2, name: 'Parry\'s White Label Sugar', packSize: '1kg', price: 43, description: 'Parry\'s White Label Sugar is a premium refined sugar crafted from high-quality sugarcane, offering sparkling white crystals with fine granules that dissolve quickly. Perfect for sweetening beverages, baking, and cooking, it enhances the flavor of every dish with consistent sweetness. Suitable for households and professional kitchens alike, it’s a trusted choice for all your culinary needs.', imageUrl: '/images/product2.jpg' },
                { id: 3, name: 'Parry\'s HMT Rice Deluxe', packSize: '26kg', price: 1450, description: 'Parry\'s HMT Rice Deluxe is a premium-quality rice variety known for its superior taste, aroma, and fluffy texture. Perfect for everyday meals or special occasions, this rice cooks evenly and absorbs flavors beautifully, making it ideal for biryanis, pulao, and other traditional dishes. Sourced from the finest grains, it ensures consistent quality and a delightful dining experience for your family.', imageUrl: '/images/product3.png' },
                { id: 4, name: 'Parry\'s JSR Lachkari Kolam Rice', packSize: '26kg', price: 1650, description: 'Parry\'s JSR Lachkari Kolam Rice is a premium short-grain rice variety renowned for its soft texture, delicate aroma, and light, fluffy consistency. Ideal for everyday cooking, it pairs perfectly with curries, dals, and a variety of dishes. Its fine quality and authentic taste make it a staple for families who value nutritious and flavorful meals.', imageUrl: '/images/product4.png' },
                { id: 5, name: 'Parry\'s URAD Dal', packSize: '25kg', price: 2800, description: 'Parry\'s URAD Dal is a high-quality split black gram that is rich in protein and essential nutrients. It is perfect for preparing traditional Indian recipes like dal makhani, idlis, dosas, and vadas. With its smooth texture and consistent cooking quality, this urad dal brings wholesome nutrition and authentic taste to your meals.', imageUrl: '/images/product5.jpg' },
                { id: 6, name: 'Parry\'s URAD Dal', packSize: '1kg', price: 112, description: 'Parry\'s URAD Dal is a high-quality split black gram that is rich in protein and essential nutrients. It is perfect for preparing traditional Indian recipes like dal makhani, idlis, dosas, and vadas. With its smooth texture and consistent cooking quality, this urad dal brings wholesome nutrition and authentic taste to your meals.', imageUrl: '/images/product6.jpg' },
                { id: 7, name: 'Parry\'s TOOR Dal', packSize: '25kg', price: 3500, description: 'Parry\'s TOOR Dal is a premium-grade pigeon pea lentil, carefully processed to retain its natural taste and nutritional value. Perfect for making hearty dals, sambhars, and other Indian delicacies, it cooks to a creamy consistency, adding richness to your dishes. Parry\'s TOOR Dal is a trusted choice for wholesome, delicious meals every day.', imageUrl: '/images/product7.jpg' },
                { id: 8, name: 'Parry\'s TOOR Dal', packSize: '1kg', price: 140, description: 'Parry\'s TOOR Dal is a premium-grade pigeon pea lentil, carefully processed to retain its natural taste and nutritional value. Perfect for making hearty dals, sambhars, and other Indian delicacies, it cooks to a creamy consistency, adding richness to your dishes. Parry\'s TOOR Dal is a trusted choice for wholesome, delicious meals every day.', imageUrl: '/images/product8.jpg' }
         ]);
        setLoading(false);
     };

       fetchData();
}, []);

   const handleSearch = (term) => {
       setSearchTerm(term);
   };

   const filteredProducts = products.filter((product) => {
       return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

 if(loading) {
       return (
           <div className="bg-gray-100 py-8 min-h-screen flex justify-center items-center">
              <ClockLoader color="#36d7b7" loading={loading} size={50}/>
         </div>
     )
  }

  return (
    <main className="bg-gray-100 py-8 min-h-screen">
         <div className="max-w-6xl mx-auto px-4">
             <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Products</h1>
                  <SearchBar onSearch={handleSearch}/>
              </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   {filteredProducts.map((product) => (
                     <ProductCard key={product.id} product={product}/>
                   ))}
              </div>
          </div>
    </main>
    );
};

export default ProductsPage;