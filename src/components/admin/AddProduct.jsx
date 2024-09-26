import axios from "axios";
import React, { useState } from "react";
import Title from "../shop/Title";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    size: "",
    bestseller: false,
    date: "",
  });
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setProduct((Values) => ({ ...Values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    axios
      .post("http://localhost:8080/api/product/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Product added successfully");
        console.log("Product added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Error adding product");
      });
  };

  return (
    <div className="container">
      <div className="my-10">
        <Title text1={"Add your"} text2={"Product"} />
        <div className="my-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Product name"
                  name="name"
                  value={product.name}
                  className="border border-gray-300 w-full sm:w-[95%] px-2 py-3 focus:outline border-primary/50 outline-none trans"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={product.description}
                  placeholder="Description"
                  name="description"
                  className="border border-gray-300 w-full sm:w-[95%] px-2 py-3 focus:outline border-primary/50 outline-none trans"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={product.price}
                  placeholder="Price"
                  name="price"
                  className="border border-gray-300 w-full sm:w-[95%] px-2 py-3 focus:outline border-primary/50 outline-none trans"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <select
                  value={product.category}
                  name="category"
                  className="border border-gray-300 w-full sm:w-[95%] px-2 py-3 focus:outline border-primary/50 outline-none trans"
                  onChange={handleChangeInput}
                >
                  <option>Select Category</option>
                  <option>Mens</option>
                  <option>Womens</option>
                  <option>Kids</option>
                </select>
              </div>
              <div>
                <select
                  value={product.subCategory}
                  name="subCategory"
                  className="border border-gray-300 w-full sm:w-[95%] px-2 py-3 focus:outline border-primary/50 outline-none trans"
                  onChange={handleChangeInput}
                >
                  <option>Select Subcategory</option>
                  <option>Top wear</option>
                  <option>Bottom wear</option>
                  <option>Kids wear</option>
                </select>
              </div>
              <div>
                <select
                  value={product.size}
                  name="size"
                  className="border border-gray-300 w-full sm:w-[95%] px-2 py-3 focus:outline border-primary/50 outline-none trans"
                  onChange={handleChangeInput}
                >
                  <option>Select Size</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>

              <div>
                <input
                  value={product.value}
                  type="date"
                  name="date"
                  className="border border-gray-300 w-full sm:w-[95%] px-2 py-3 focus:outline border-primary/50 outline-none trans"
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <input
                  type="file"
                  name="fileUrl"
                  className="border border-gray-300 w-full sm:w-[95%] px-2 py-3 focus:outline border-primary/50 outline-none trans"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex items-center">
                <label className="mr-4 text-primary font-medium">
                  Bestseller
                </label>
                <input
                  type="checkbox"
                  name="bestseller"
                  checked={product.bestseller}
                  onChange={(e) => {
                    setProduct({ ...product, bestseller: e.target.checked });
                  }}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary/85 text-white px-1 py-2 w-36 mt-4"
                onChange={handleImage}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
