"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { productdata } from "../products/productdata";
import { useState, useEffect } from "react";

export default function App() {
  const list = productdata;
  const [country, setCountry] = useState('');


  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch('https://api.ipregistry.co/?key=tryout');
        const payload = await response.json();
        setCountry(payload.location.country.name);

      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };

    fetchCountry();
  }, []);

  const isNotIndia = country && country !== 'India';

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => {
          const priceInUsd = isNotIndia ? (item.price / 82) : item.price;
          const adjustedPrice = Math.ceil(priceInUsd); // Round up to the nearest integer

          return (
            <Card
              shadow="sm"
              key={index}
              isPressable
              className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <Link
                href={`/products/${item.page_id}`}
                key={index}
                className="block no-underline"
              >
                <CardBody className="p-2 sm:p-4">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width={200}
                    height={200}
                    alt={item.title}
                    src={item.img}
                    className="object-cover w-full h-48 sm:h-60"
                  />
                </CardBody>

                <CardFooter className="p-2 sm:p-4 bg-gray-50 font-bold">
                  <div className="flex flex-col space-y-2">
                    <b className="text-sm sm:text-lg text-gray-800">{item.title}</b>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {adjustedPrice} {isNotIndia ? 'USD' : 'INR'}
                    </p>
                    <p className="text-xs text-gray-500 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </CardFooter>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
