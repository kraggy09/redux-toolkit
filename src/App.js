import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, getCartItem } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItem());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  const { isOpen } = useSelector((store) => store.modal);
  console.log(isOpen);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading.....</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
