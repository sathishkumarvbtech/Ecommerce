import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellerProduct, setbestSellerProduct] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setbestSellerProduct(bestProducts.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center mb-6">
        <Title text1={"Best Seller"} text2={"Products"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6">
        {bestSellerProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            imgs={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
