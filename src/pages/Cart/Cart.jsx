import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.";
import "./Cart.css";
export const Cart = () => {
  const { state, removeCartItem, incQty, decQty } = useContext(CartContext);
  const { cartItems } = state;
  const totalPrice = cartItems.reduce((acc, curr) => (acc += curr.price), 0);
  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="container">
          <div className="grid-container-column">
            <div className="item1">
              {cartItems.map((item) => {
                const { _id, name, price, img, qty } = item;
                return (
                  <div className="horizontal-card box-shadow">
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
                          onClick={() => incQty(_id)}>
                          +
                        </button>
                        {qty}
                        <button
                          className="btn btn-count"
                          onClick={() => decQty(_id)}>
                          -
                        </button>
                      </label>
                      <div className="btn-card">
                        <button
                          className="btn-h btn dark "
                          onClick={() => removeCartItem(_id)}>
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
                      <span>Price({cartItems.length})</span>
                      <br />
                      <hr />
                      <span>Total</span>
                    </div>
                    <div className="price-item2">
                      <span>{totalPrice}.Rs</span>
                      <br />
                      <hr />
                      <span>{totalPrice}.Rs</span>
                    </div>
                  </div>
                  <br />
                  <button className="btn-cart btn dark ">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h5>Cart is Empty .. please add items in cart</h5>
        </div>
      )}
    </div>
  );
};
