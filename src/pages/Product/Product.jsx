import "./Product.css";
import { useContext } from "react";
import { useProductContext } from "../../contexts/productContext";
import { CartContext } from "../../contexts/CartContext.";
import { useAuth } from "../../contexts/AuthContext";
import { useWishList } from "../../contexts/WishListContext";
export const Product = () => {
  const {
    filteredData,
    sortHighToLow,
    rating,
    category,
    getProductById,
  dispatch} = useProductContext();
  const { addToCart } = useContext(CartContext);
  const { accessToken } = useAuth();
  const { addToWishList } = useWishList();

  
  
  return (
    <>
      <div className="container-product">
        <div className="flex-container">
          <div className="sidebar">
            <div className="aside">
              <span className="aside-header">Filter</span>
              <br />
              <hr />

              <ul className="list">
                <p>Rating</p>
                <li className="aside-item">
                  <div className="rating">
                    <label htmlFor="">
                      <p>
                        <input type="checkbox" checked={rating === 2}
                         onChange={()=>dispatch({type:"FILTER_BY_RATING",payload:2})} /> 2
                        <i className="fas fa-star"></i> and above
                      </p>
                    </label>
                    <label htmlFor="">
                    <p>
                        <input type="checkbox" checked={rating === 4}
                         onChange={()=>dispatch({type:"FILTER_BY_RATING",payload:4})} /> 4
                        <i className="fas fa-star"></i> and above
                      </p>
                    </label>
                  </div>
                  <br />
                  <hr />
                </li>
                <li className="aside-item">
                  <p>Categories</p>
                  <div className="category">
                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Fresh Juices" checked={category === "Fresh Juices"}
                        onChange={(e)=>dispatch({type:"FILTER_CATEGORY",payload:"Fresh Juices"})} /> Juices
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Dairy" checked={category === "Dairy"}
                        onChange={(e)=>dispatch({type:"FILTER_CATEGORY",payload:"Dairy"})} /> Dairy
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Fruit" 
                        checked={category === "Fruit"}
                        onChange={(e)=>dispatch({type:"FILTER_CATEGORY",payload:"Fruit"})}/> Fruit
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Vegetables"
                        checked={category === "Vegetables"}
                        onChange={(e)=>dispatch({type:"FILTER_CATEGORY",payload:"Vegetables"})} /> Vegetables
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Dry Food"
                        checked={category === "Dry Fruits"}
                        onChange={(e)=>dispatch({type:"FILTER_CATEGORY",payload:"Dry Fruits"})} /> Dry Food
                      </label>
                    </p>


                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="All"
                        checked={category === "All"}
                        onChange={(e)=>dispatch({type:"SHOW_ALL",payload:"All"})} /> All
                      </label>
                    </p>
                  </div>
                  <br />
                  <hr />
                </li>

                <li className="aside-item">
                  <div className="slider">
                    <p>Price</p>
                    <input type="range" className="price-range" />
                    <p>
                      <label>
                        <input type="radio" name="sort" id="hl" checked={sortHighToLow===true} 
                        onChange={(e)=> dispatch({type:"SORT_PRICE",payload:true})} />
                        High to Low
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="radio" name="sort" id="hl" checked={sortHighToLow ===false}
                        onChange={(e)=>dispatch({type:"SORT_PRICE",payload:false})} />
                        Low to High 
                      </label>
                    </p>
                    <button className="btn sm" onClick={()=> dispatch({type:"CLEAR"})}>clear all</button>
                  </div>
                  <br />
                  <hr />
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <div className="container">
                <div className="grid-container product-list">
                  {filteredData?.map((item) => {
                    const { _id, img, name, rating, price } = item;
                    return (
                      <div key={_id} className={_id}>
                        <div className="card">
                          <div class="wishlist-badge">
                            <button
                              class="btn-round"
                              onClick={() => addToWishList(item, accessToken)}>
                              <i class="fas fa-heart wishlist-icon"></i>
                            </button>
                          </div>
                          <img
                            className="card-img"
                            src={img}
                            alt="product_image"
                            onClick={() => getProductById(_id)}
                          />
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
                              className="btn dark"
                              onClick={() => addToCart(item, accessToken)}>
                              Add
                            </button>:
                            <button
                              className="btn dark"
                              onClick={() => addToCart(item, accessToken)}>
                              Go To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
