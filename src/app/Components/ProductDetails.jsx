"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Tabs from './Tabs';
import Link from 'next/link';
import { productdata } from '../products/productdata';
import BuyModal from './BuyModal';

const ProductDetail = ({ params }) => {
  const product = productdata.find(p => p.page_id === params.productId);
  const [selectedImage, setSelectedImage] = useState(product.img);
  const [country, setCountry] = useState('');
  const [adjustedPrice, setAdjustedPrice] = useState(product.price);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('https://api.ipregistry.co/?key=tryout');
        const payload = await response.json();
        const userCountry = payload.location.country.name;
        setCountry(userCountry);

        // Adjust price based on country
        if (userCountry !== 'India') {
          const priceInUsd = product.price / 82; // Conversion rate for INR to USD
          setAdjustedPrice(Math.ceil(priceInUsd)); // Round up to the nearest integer
        } else {
          setAdjustedPrice(product.price);
        }
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };

    fetchCountry();
  }, [product.price]);

  const CURRENCY = country && country !== 'India' ? 'USD' : 'INR';
  
  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="w-full">
          <div className="relative w-full h-80">
            <Image
              src={selectedImage}
              alt={product.title}
              className="rounded-lg"
            />
          </div>

          <div className="mt-4 flex space-x-2 overflow-x-auto">
            {product.imageGallery.map((img, index) => (
              <button key={index} onClick={() => setSelectedImage(img)}>
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className={`rounded-lg cursor-pointer ${
                    selectedImage === img ? 'border-2 border-blue-500' : ''
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-white-100 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold mb-4 text-green-600">{CURRENCY} {adjustedPrice}</p>

          {/* Buy Button */}
          <BuyModal AMOUNT={adjustedPrice} REDIRECT_URL={product.REDIRECT_URL} CURRENCY={CURRENCY} />
        </div>
      </div>

      <Tabs params={params} />

      {/* More Products Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">More Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productdata.slice(0, 6).map((item) => (
            <article key={item.page_id} className="bg-white shadow-md rounded-lg p-4">
              <Link href={`/products/${item.page_id}`} className="no-underline">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-black-100">{item.title}</h3>
                <p className="text-gray-700 mb-4">
                  {country && country !== 'India' ? `USD ${Math.ceil(item.price / 82)}` : `INR ${item.price}`}
                </p>
                <p className="text-gray-700 mb-4">{item.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
