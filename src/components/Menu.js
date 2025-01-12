import React from 'react';
import Link from 'next/link';
import {Transition} from '@headlessui/react'

const Menu = ({ isOpen, onClose }) => {
    return (
       <Transition
          show={isOpen}
           enter="transition-opacity duration-75"
           enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
             leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md w-full max-w-sm relative flex flex-col">
                <nav className="flex flex-col gap-4 text-lg flex-grow">
                     <Link href="/" onClick={onClose} className="text-white bg-black px-3 py-2 rounded block transition-transform hover:scale-105 focus:outline-none text-center">Home</Link>
                    <Link href="/products" onClick={onClose} className="text-white bg-black px-3 py-2 rounded block transition-transform hover:scale-105 focus:outline-none text-center">Products</Link>
                   <Link href="/cart" onClick={onClose} className="text-white bg-black px-3 py-2 rounded block transition-transform hover:scale-105 focus:outline-none text-center">Cart</Link>
                    <Link href="/contact" onClick={onClose} className="text-white bg-black px-3 py-2 rounded block transition-transform hover:scale-105 focus:outline-none text-center">Contact Us</Link>
                </nav>
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                       className="text-white bg-red-600 hover:bg-red-700 focus:outline-none rounded px-3 py-1 transition-colors duration-200 mt-4"
                    >
                       Close
                    </button>
               </div>
         </div>
       </div>
      </Transition>
    );
  };

  export default Menu;