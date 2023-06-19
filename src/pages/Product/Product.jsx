import "./Product.css";
import { useContext } from "react";
import { useProductContext } from "../../contexts/productContext";
import { CartContext } from "../../contexts/CartContext.";
import { useAuth } from "../../contexts/AuthContext";
export const Product = () => {
  const { data } = useProductContext();
  const { addToCart } = useContext(CartContext);
  const { accessToken } = useAuth();
  const { getProductById } = useProductContext();

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
                        <input type="checkbox" /> 2
                        <i className="fas fa-star"></i> and above
                      </p>
                    </label>
                    <label htmlFor="">
                      <p>
                        <input type="checkbox" /> 4
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
                        <input type="checkbox" name="Fresh Juices" /> Juices
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Dairy" /> Dairy
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Fruit" /> Fruit
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Vegetables" /> Vegetables
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" name="Dry Food" /> Dry Food
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
                        <input type="radio" name="sort" id="" />
                        Low to High
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="radio" name="sort" id="" />
                        High to Low
                      </label>
                    </p>
                    <button className="btn sm ">clear all</button>
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
                {data.map((item) => {
                  const { _id, img, name, rating, price } = item;
                  return (
                    <div key={_id} className={_id}>
                      <div className="card">
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
