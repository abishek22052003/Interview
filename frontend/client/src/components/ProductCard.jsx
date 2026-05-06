import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        borderRadius: "8px",
        background: "white",
        width: "200px",
        margin: "10px",
        backgroundColor: "#c9e5c3",
        transition: "0.3s",
        transform: hover ? "scale(1.03)" : "scale(1)"
      }}
    >
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <p><b>{product.category}</b></p>

      <button
        onClick={() => addToCart(product)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: "8px",
          background: hover ? "#00c853" : "#333",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px",
          transition: "0.3s"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;