import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, imgs, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <>
      <Link className="cursor-pointer" to={`/product/${id}`}>
        <div className="text-gray-800 dark:text-white overflow-hidden">
          <div>
            <img
              src="{imgs[0]}"
              className="hover:scale-110 transition ease-in-out"
            />
          </div>

          <h3>{name}</h3>
          <p>
            {currency} {price}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
