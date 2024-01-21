import { useWishList } from "../../contexts/WishListContext";
import "./Wishlist.css";
import emptyWishList from "../../assets/empty_wishlist.png"
export const Wishlist = () => {
  const { wishList, removeFromWishList } = useWishList();
  return (
    <div>
    {wishList.length > 0 ?(
     <div className="container">
     <div className="grid-container product-list">
       {wishList.map((item) => {
         const { _id, img, name, rating, price } = item;
         return (
           <div key={_id} className={_id}>
             <div className="card">
               <img className="card-img" src={img} alt="product_image" />
               <div className="description">
                 <h5>{name}</h5>
                 <br />
                 <p>{price}.Rs</p>
                 <br />
                 <div className="text-left">
                   {rating}
                   <i className="fas fa-star"></i>
                 </div>
               </div>
               <div className="card-btn ">
                 <button
                   className="btn dark "
                   onClick={() => removeFromWishList(_id)}>
                   Remove From Wishlist
                 </button>
               </div>
             </div>
           </div>
         );
       })}
     </div>
   </div> 
  ):(
    <div  className="container">
      <div className="empty-container">
      <img src={emptyWishList} className="img-empty" alt="" />
      <h5>WishList is Empty .. please add items in WishList</h5>
      </div>
    </div>
  )
}
    </div>
  );
};
