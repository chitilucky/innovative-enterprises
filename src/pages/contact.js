import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const ContactPage = () => {
  return (
    <main className="bg-gray-100 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
       <div className="mb-4">
          <Link href="/" className="inline-flex items-center text-blue-500 hover:text-blue-700">
              <ArrowLeftIcon className="h-5 w-5 mr-1"/>
                Back to Home
          </Link>
       </div>
         <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Feel free to reach out to us with any questions or inquiries.
        </p>
        {/* Add a contact form here or other contact information */}
        <div className="bg-white rounded-lg shadow-md p-6">
           <p className="text-gray-700">
               You can call us at 8919314773
          </p>
         </div>
      </div>
    </main>
  );
};

export default ContactPage;