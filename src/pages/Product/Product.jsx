import { useState } from "react";
import "./Product.css";
import { useEffect } from "react";

export const Product = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setData(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
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
                        <input type="checkbox" /> Juices
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" /> Dairy
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" /> Fruit
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" /> Vegetables
                      </label>
                    </p>

                    <p>
                      <label htmlFor="">
                        <input type="checkbox" /> Dry Food
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
                  const { id, img, name, categoryName, rating, price } = item;
                  return (
                    <div key={id} className={id}>
                      <div className="card">
                        <img
                          className="card-img"
                          src={img}
                          alt="product_image"
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
                          <button className="btn dark ">Add</button>
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
