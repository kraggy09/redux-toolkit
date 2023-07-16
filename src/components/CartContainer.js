import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { open } from "../features/cart/modalSlice";
const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently Empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            dispatch(open());
          }}
          className="btn clear-btn"
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
