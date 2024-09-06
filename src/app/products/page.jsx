"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";;
import ProductCard from "../Components/ProductCard";
import { NavBar } from "../OELandingPage/NavBar";

export default function Products() {
  return (
    <>
        <NavBar/>
      <Breadcrumbs className="mt-20">
        <BreadcrumbItem>
          {/* <Link href="/" className="breadcrum">Home</Link> */}
        </BreadcrumbItem>
        {/* <BreadcrumbItem className="breadcrum">Products</BreadcrumbItem> */}
      </Breadcrumbs>
      <ProductCard/>
    </>
  );
}
