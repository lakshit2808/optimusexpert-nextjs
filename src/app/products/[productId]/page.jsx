"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";
import ProductDetail from "@/app/Components/ProductDetails";
import { NavBar } from "@/app/OELandingPage/NavBar";

const ProductDetails = ({ params }) => {
  return (
    <div>
        <NavBar/>
      <Breadcrumbs className="mt-12 pt-5">
        {/* <BreadcrumbItem>
          <Link href="/" className="breadcrum">
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/products" className="breadcrum">
            Products
          </Link>
        </BreadcrumbItem> */}
        {/* <BreadcrumbItem className="breadcrum">Product Details</BreadcrumbItem> */}
      </Breadcrumbs>
      {/* Product Details Page {params.productId} */}
      <ProductDetail params = {params}/>
    </div>
  );
};

export default ProductDetails;
