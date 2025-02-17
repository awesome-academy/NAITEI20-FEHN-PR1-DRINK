import React, { useState } from "react";
import ProductCardSmall from "../product-card/ProductCardSmall";

const ProductListSmall = ({products}) => {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-15">
      {products.map((product, index) => (
        <ProductCardSmall displayTag={false} key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductListSmall;
