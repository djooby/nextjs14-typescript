import React from 'react'

export default async function PageProduct() {

  const res = await fetch("https://dummyjson.com/products").then((data) => data.json());
  // console.log(res);
  const products = res.products;
  // console.log(products);
  return (
    <div>PageProduct</div>
  )
}
