import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import axios from 'axios'
import { useState, useEffect } from "react";
// import shirt from "../assets/watch.webp"
// import shoe from "../assets/shoes.jpeg"
// import watch from "../watch.webp"



function Products() {
  const { addToCart } = useContext(CartContext);
  const [productsData, setProducts] = useState([]);

useEffect(() => {
  axios.get("http://localhost:5000/api/products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
    });
}, []);

  return (
    <div>
      <h2>Products</h2>
      <div style={{display:"flex" ,}}>
      {productsData.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}</div>
    </div>
  );
}

export default Products;