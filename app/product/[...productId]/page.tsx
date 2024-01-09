import React from 'react'

export default async function ProductPage({
  params,
}: {
  params: {
    productId: string;

  }
}
) {
  const product = await fetch('https://dummyjson.com/products/' + params.productId).then((data) => data.json());

  return (
    <div className="main">
      <h1>{product.title}</h1>

      <p>All segment: {JSON.stringify(params.productId)}</p>

    </div>
  )
}
