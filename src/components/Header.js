import React, {useState, useContext} from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Menu from './Menu';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { CartContext } from '@/contexts/CartContext';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
     const {cartItems} = useContext(CartContext)
    const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    }
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
 return (
    <header className="bg-gray-800 p-4 flex items-center justify-between w-full">
      <div className="flex items-center">
        <button onClick={handleToggleMenu} className="text-white mr-4 focus:outline-none">
          <Bars3Icon className="h-6 w-6" />
       </button>
         <h1 className="text-white text-xl font-bold">
           Innovative Enterprises
         </h1>
       </div>
      <div className="flex items-center">
          <Link href="/cart" className="text-white hover:text-gray-300 relative">
             <ShoppingCartIcon className="h-6 w-6"/>
                {totalItems > 0 && (
                   <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center transform translate-x-1 -translate-y-1">
                     {totalItems}
                   </span>
                )}
           </Link>
           <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
     </div>
    </header>
   );
};

export default Header;