import * as React from "react";
import "./Forms.css";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";

export default function AddProductPage() {
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    producttitle: "",
    productdescription: "",
    productprice: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("https://dummyjson.com/products/add", {
        formData,
      })
      .then(function (response) {
        console.log(response);
        if (response) {
          setRedirect(true);
          toast.success("Product Added Successfully !", {
            position: "top-right",
            theme: "dark",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Product Not Added. Please Try Again !", {
          position: "top-right",
          theme: "dark",
        });
      });
  };

  return (
    <>
      {redirect && <Navigate to="/"></Navigate>} 
      <div class="two alt-two">
        <h5>
          Add Product Page
          <span>This Page will Add The Products</span>
        </h5>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          onSubmit={handleSubmit}
          style={{ width: "30%", display: "flex", flexDirection: "column" }}
        >
          <label>
            Product Title
            <input
              required
              type="text"
              name="producttitle"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Product Description
            <input
              required
              type="text"
              name="productdescription"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Price
            <input
              required
              type="text"
              name="productprice"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Rating
            <input
              required
              type="text"
              name="rating"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Stock
            <input
              required
              type="text"
              name="stock"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Brand
            <input
              required
              type="text"
              name="brand"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Category
            <input
              required
              type="text"
              name="category"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Image
            <input
              required
              type="file"
              name="image"
              value={formData.username}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}
