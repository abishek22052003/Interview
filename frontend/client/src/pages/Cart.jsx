import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, increase, decrease, removeItem } = useContext(CartContext);

  return (
    <div>
      <h2 >Cart</h2>

      {cart.length === 0 ? (
        <p style={{marginLeft:"2%"}}>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Qty: {item.quantity}</p>

            <button onClick={() => increase(item.id)}>+</button>
            <button onClick={() => decrease(item.id)}>-</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;