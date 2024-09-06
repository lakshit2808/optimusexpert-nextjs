import React, { useState } from 'react';
import { productdata } from '../products/productdata';
const Tabs = ({ params }) => {
  // Find the selected product based on the productId
  const product = productdata.find(p => p.page_id === params.productId);
  const [activeTab, setActiveTab] = useState(product.tabs[0].id);

  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="rounded-t-lg shadow-md">
        <div className="flex border-b">
          {product.tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 font-semibold text-sm ${
                activeTab === tab.id
                  ? 'bg-black text-white border-b-2 border-white'
                  : 'text-gray-600 hover:text-grey'
              } transition-colors duration-300`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 rounded-b-lg shadow-md">
        {product.tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className="text-white-800">
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
