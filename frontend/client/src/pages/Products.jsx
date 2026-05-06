import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
// import shirt from "../assets/watch.webp"
// import shoe from "../assets/shoes.jpeg"
// import watch from "../watch.webp"

const productsData = [
  {
    id: 1,
    name: "Shirt",
    price: 500,
    description: "Comfortable cotton shirt",
    category: "Clothing"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1500,
    description: "Running shoes",
    category: "Footwear"
  },
  {
    id: 3,
    name: "Watch",
    price: 2000,
    description: "Stylish wrist watch",
    category: "Accessories"
  }
];

function Products() {
  const { addToCart } = useContext(CartContext);

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