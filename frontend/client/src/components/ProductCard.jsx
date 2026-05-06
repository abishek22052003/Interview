function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid black", padding: "15px",borderRadius:"8px",
    background:"white",width:"200px" , margin:"10px",backgroundColor:"#c9e5c3"}}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <p>{product.description}</p>
      <p><b>{product.category}</b></p>
      <button onClick={() => addToCart(product)} style={{padding:"8px", background:"#333", 
        color:"white",border:"none",cursor:"pointer",borderRadius:"10px"}}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;




