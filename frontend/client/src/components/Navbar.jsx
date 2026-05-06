import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [hovered, setHovered] = useState(null);

  const linkStyle = (name) => ({
    color: hovered === name ? "#00e676" : "white",
    textDecoration: "none",
    transform: hovered === name ? "scale(1.1)" : "scale(1)",
    transition: "0.3s"
  });

  return (
    <nav
      style={{
        display: "flex",
        gap: "100px",
        padding: "10px",
        background: "#423c3c",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Link
        to="/"
        style={linkStyle("home")}
        onMouseEnter={() => setHovered("home")}
        onMouseLeave={() => setHovered(null)}
      >
        Home
      </Link>

      <Link
        to="/products"
        style={linkStyle("products")}
        onMouseEnter={() => setHovered("products")}
        onMouseLeave={() => setHovered(null)}
      >
        Products
      </Link>

      <Link
        to="/cart"
        style={linkStyle("cart")}
        onMouseEnter={() => setHovered("cart")}
        onMouseLeave={() => setHovered(null)}
      >
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;