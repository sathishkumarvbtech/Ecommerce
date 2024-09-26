import React, { useContext } from "react";
import { ShopContext } from "../components/context/ShopContext";
import Title from "../components/shop/Title";

const CartTotal = () => {
  const { currency, getTotalAmount, delivery_fee } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Cart"} text2={"totals"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-around">
          <p>Sub Total</p>
          <p>
            {currency}
            {getTotalAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-around">
          <p>Delivery Cost</p>
          <p>
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-around font-medium">
          <p>Total Amount</p>
          <p>
            {currency}
            {getTotalAmount() === 0 ? 0 : getTotalAmount() + delivery_fee}.00
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartTotal;
