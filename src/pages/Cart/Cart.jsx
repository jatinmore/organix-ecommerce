import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext.";
import {useWishList} from "../../contexts/WishListContext"
import {useAuth} from "../../contexts/AuthContext";
import {useProductContext} from "../../contexts/productContext";
import emptyCart from "../../assets/empty_cart.png"
import "./Cart.css";
export const Cart = () => {
  const { cartItems, removeCartItem,dispatch,total} = useContext(CartContext);
  const {addToWishList} = useWishList();
  const { accessToken } = useAuth();
  const {navigate} = useProductContext();
  const moveToWishList = (item, accessToken) => {
    if (item._id !== "" || item._id !== null) {
        addToWishList(item,accessToken) 
        removeCartItem(item._id)
    }
}

const decQty = (item) => {
 
  if(item.qty > 1)
  {
    dispatch({type:"DEC_QTY",payload:item});

  }
}
  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="container">
          <div className="grid-container-column">
            <div className="item1">
              {cartItems.map((item) => {
                const { _id, name, price, img, qty } = item;
                return (
                  <div className="horizontal-card box-shadow" key={_id}>
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
                          onClick={() => dispatch({type:"INC_QTY",payload:item})}>
                          +
                        </button>
                        {qty}
                        <button
                          className="btn btn-count"
                          onClick={()=>decQty(item)}
                          >
                          -
                        </button>
                      </label>
                      <div className="btn-card">
                        <button
                          className="btn-h btn dark "
                          onClick={() => removeCartItem(_id)}>
                          Remove From Cart
                        </button>
                        <button className="btn-h btn dark " onClick={()=>moveToWishList(item,accessToken)}>
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
                      <span>Delivery Charges</span>
                      <br />
                      <hr />
                      <span>Total</span>
                    </div>
                    <div className="price-item2">
                      <span>{total}.Rs</span>
                      <br />
                      <hr />
                      <span>FREE</span>
                      <br />
                      <br/>
                      <hr />
                      <span>{total}.Rs</span>
                    </div>
                  </div>
                  <br />
                  <button className="btn-cart btn dark " onClick={()=> navigate("/checkout")}>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="empty-container">
          <img src={emptyCart} className="img-empty" alt="" />
          <h5>Cart is Empty .. please add items in cart</h5>
          </div>
        </div>
      )}
    </div>
  );
};
