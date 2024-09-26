import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../components/context/ShopContext";
import RelatedProducts from "../components/shop/RelatedProducts";

const Product = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { Id } = useParams();
  const productId = Number(Id);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState();
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        console.log(item);
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="container border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="scrollbar sm:no-scrollbar flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            Hello
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-24% sm:w-full flex-shrink-0 mb-3 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto " src={image} />
          </div>
        </div>
        {/* Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center gap-2 mt-2">
            <img src={assets.star_icon} className="w-3 h-3" />
            <img src={assets.star_icon} className="w-3 h-3" />
            <img src={assets.star_icon} className="w-3 h-3" />
            <img src={assets.star_icon} className="w-3 h-3" />
            <img src={assets.star_dull_icon} className="w-3 h-3" />
            <p className="pl-2 text-sm">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-600 dark:text-white md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border px-4 bg-gray-100 text-gray-800 py-2 ${
                    item === size ? "border-primary" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <button
              className="bg-primary text-sm font-medium p-2 rounded-sm active:bg-primary/65"
              onClick={() => addToCart(productData.id, size)}
            >
              ADD TO CART
            </button>
            <hr className="mt-5 w-4/5" />
          </div>
          <div className="text-sm text-gray-700 flex flex-col gap-1 mt-5 dark:text-white">
            <p>100% Original product.</p>
            <p>Cash on Delivery available for this product.</p>
            <p>Easy return 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className="mt-10">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="mt-4 text-gray-600 dark:text-white text-sm">
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aliquam ex repellat nihil esse deleniti iusto optio eveniet eum quo
            praesentium adipisci beatae, in sunt perspiciatis error neque amet
            voluptates? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Provident, distinctio repudiandae culpa quod ut nesciunt saepe
            est, perferendis iusto voluptatum magni soluta! Sed illum
            dignissimos quod sunt laboriosam dolore libero.
          </p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            expedita similique sint iusto quam et ipsum illum hic odit
            laudantium, reiciendis sequi error doloremque mollitia? Error quae
            qui eligendi est.
          </p>
        </div>
      </div>
      {/* Display Related products*/}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
