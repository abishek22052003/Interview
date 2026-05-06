import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "100px", padding: "10px" , 
        background: "#423c3c", justifyContent:"center"
        ,
    }}>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/products">Products</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;