import { useContext } from "react"
import "./Checkout.css"
import { CartContext } from "../../contexts/CartContext."
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

export const Checkout = () => {
    const {cartItems,total,dispatch} = useContext(CartContext);
    const {navigate} = useAuth();
    const placeOrder = () => {
        toast.success("Order Placed Successfully");
        dispatch({type:"EMPTY_CART"});
        navigate("/");
        

    }
    return <div className="container">
        <div className="grid-container-column">
            <div className="order-container">
                <div>            
                    <span>Order Summary</span>
                    <hr/>
                    {cartItems.map(({_id,name,price,qty}) => 
                    <div key={_id} className="checkout-box">
                        <div className="box1">
                            <p>{name}</p>
                        </div>
                        <div className="box2">
                            <p>{price} x {qty}</p>
                        </div>
                        <div className="box3">
                            <p>Rs.{price * qty}</p>
                        </div>
                    </div>)}
                    <p>Total Amount :Rs.{total}</p>
                    <div className="address-data">
                        <p>Deliver to:</p>
                        <hr/>
                        <div>
                        <input type="radio" name="address" value="add1"/>
                            <span>Adarsh Balika</span>
                            <p>Room no.205,a wing,street no.12,thane</p>
                            <p>Thane 400005</p>
                            <p>930699019</p>
                        </div>
                        <hr/>
                        <div>
                        <input type="radio" name="address" value="add2"/>
                            <span>Jatin More</span>
                            <p>Room no.101,j wing, laxmi park, new panvel</p>
                            <p>Navi Mumbai 410206</p>
                            <p>910990693</p>
                        </div>

                    </div>
                    <button className="btn dark" onClick={()=> placeOrder()}>Make Payment</button>
                </div>
            </div>


        </div>
    </div>
}