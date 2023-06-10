import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.";
import "./Cart.css";
export const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { total, quantity, cartItems } = state;
  // console.log(cartItems.map((p) => p.name));

  // console.log("Cart Items");
  // console.log(state.cartItems);
  return (
    <div>
      <div className="container">
        <div className="grid-container-column">
          <div className="item1">
            {cartItems.map((item) => {
              const { id, name, price, img, qty } = item;
              return (
                <div key={id} className="horizontal-card box-shadow">
                  <img className="horizontal-img" alt="cart-img" src={img} />
                  <div className="h-text description">
                    <h5>{name}</h5>
                    <br />
                    <p>{price}.Rs</p>
                    <br />
                    <label htmlFor="qty">
                      Quantity
                      <button
                        className="btn btn-count"
                        onClick={() =>
                          dispatch({ type: "INC_QTY", payload: item })
                        }>
                        +
                      </button>
                      {qty}
                      <button
                        className="btn btn-count"
                        onClick={() =>
                          dispatch({ type: "DEC_QTY", payload: qty })
                        }>
                        -
                      </button>
                    </label>
                    <div className="btn-card">
                      <button
                        className="btn-h btn dark "
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item })
                        }>
                        Remove From Cart
                      </button>
                      <button className="btn-h btn dark ">
                        Move to Whishlist
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="item2">
            <div className="horizontal-card checkout box-shadow">
              <div className="h-text description">
                <h5>Price Details</h5>
                <br />
                <br />
                <hr />
                <div className="price grid-container-column">
                  <div className="price-item1">
                    <span>Price({quantity})</span>
                    <br />
                    <hr />
                    <span>Total</span>
                  </div>
                  <div className="price-item2">
                    <span>{total}.Rs</span>
                    <br />
                    <hr />
                    <span>{total}.Rs</span>
                  </div>
                </div>
                <br />
                <button className="btn-cart btn dark ">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
