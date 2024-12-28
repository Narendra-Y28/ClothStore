import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const makePayment = async () => {
    const stripe = await loadStripe('pk_test_51Qb24qA5LhuPj8pKQ9Qkyrkcy2g6APUa1ovfMDMcDN3AGZs6Srpa0z0JYXTnJsxo3cPRKbpAY3acr4VnuktnvaRm00D9gR8Lg9');
   
    const body = {
      products: cartItems,
    };
    console.log(body, "sending");

    const response = await fetch("http://localhost:5000/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error("Failed to create session");
      return;
    }

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="cartPage">
      <h2 className="title">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="cartItems">
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.imageURL} alt={item.name} className="cartPageImg" />
              <div className="itemDetails">
                <h3>{item.name}</h3>
                <p>Brand: {item.brand}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <button className="btn btn-info" onClick={makePayment}>
            Check Out
          </button>
        </div>
      )}
    </div>
  );
}
