import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.";
import { ProductContext } from "../../contexts/productContext";
import {useAuth} from "../../contexts/AuthContext";
import {useWishList} from "../../contexts/WishListContext";
export const ProductDetail = () => {
  const { productDetail } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useWishList();
  const { accessToken } = useAuth();
  return (
    <>
      <div className="container">
        <div key={productDetail._id} className={productDetail._id}>
          <div className="card">
            <img
              className="card-img"
              src={productDetail.img}
              alt="product_image"
            />
            <div className="description">
              <h5>{productDetail.name}</h5>
              <br />
              <p>{productDetail.price}.Rs</p>
              <br />
              <div className="text-left">
                {productDetail.rating}
                <i className="fas fa-star"></i>
              </div>
            </div>
           
            <div className="card-btn ">
            <button className="btn dark"
                onClick={() => addToCart(productDetail, accessToken)}>
                Add
            </button>
              <button className="btn dark "  onClick={() => addToWishList(productDetail, accessToken)}>Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
