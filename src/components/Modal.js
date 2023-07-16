import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { close } from "../features/cart/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your cart?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(close());
            }}
            type="button"
            className="btn confirm-btn"
          >
            confirm
          </button>
          <button
            onClick={() => {
              dispatch(close());
            }}
            type="button"
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
