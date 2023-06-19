import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
export const ProductDetail = () => {
  const { productDetail } = useContext(ProductContext);

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
              <button className="btn dark ">Add</button>
              <button className="btn dark ">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
