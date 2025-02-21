import React, { useState } from "react";
import ProductCardSmall from "../product-card/ProductCardSmall";

const ProductListSmall = ({ products }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-6 gap-y-15 md:grid md:grid-cols-3">
      {products.map((product, index) => (
        <ProductCardSmall displayTag={false} key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductListSmall;
