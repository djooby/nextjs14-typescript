import React from "react";
import Image from "next/image";

export default async function PageProduct() {
  const res = await fetch("https://dummyjson.com/products").then((data) =>
    data.json()
  );
  const products = res.products;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: any) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"></div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-bold text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
