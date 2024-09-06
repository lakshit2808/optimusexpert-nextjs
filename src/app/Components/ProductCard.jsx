import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { productdata } from "../products/productdata";

export default function App() {
  const list = productdata;

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-10 pt-10 ">
      {list.map((item, index) => (

          <Card
            shadow="sm"
            key={index}
            isPressable
            className="w-full object-cover h-full"
          >
                    <Link
          href={`/products/${item.page_id}`}
          key={index}
          className="m-1 border-solid border-1 border-white-500 text-white no-underline"
        >
            <CardBody>
              <Image
                shadow="sm"
                radius="lg"
                width="100px"
                alt={item.title}
                src={item.img}
              />
            </CardBody>
            
            <CardFooter className="flex flex-col space-y-2 p-4 bg-gray-50">
              <b className="text-lg text-gray-800">{item.title}</b>
              <p className="text-sm text-gray-600">{item.price}</p>
              <p className="text-xs text-gray-500 leading-tight">
                {item.description}
              </p>
            </CardFooter>
            </Link>
          </Card>
      ))}
    </div>
  );
}
