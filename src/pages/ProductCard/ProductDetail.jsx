import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
export const ProductDetail = () => {
  const { data } = useContext(ProductContext);
  const { productId } = useParams();
  const productDetailById = (data, productId) => {
    return data.find((p) => p.id === productId);
  };

  const d = productDetailById(data, productId);

  return (
    <>
      <div className="container">
        ProductDetail for id {productId}
        <div key={d.id} className={d.id}>
          <div className="card">
            <img className="card-img" src={d.img} alt="product_image" />
            <div className="description">
              <h5>{d.name}</h5>
              <br />
              <p>{d.price}.Rs</p>
              <br />
              <div className="text-left">
                {d.rating}
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
