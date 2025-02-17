import React, { useState } from "react";
import ProductCardLarge from "../product-card/ProductCardLarge";

const ProductListLarge = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {products.map((product, index) => (
        <ProductCardLarge key={index} {...product} />
      ))}
    </div>
  );
};
export default ProductListLarge;
