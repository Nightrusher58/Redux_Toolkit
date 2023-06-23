import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  } else {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
        </header>
        <div>
          {cartItems.map((data) => {
            return <CartItem key={CartItem.id} {...data} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h2>
              total <span>${total}</span>
            </h2>
          </div>

          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </footer>
      </section>
    );
  }
};

export default CartContainer;
