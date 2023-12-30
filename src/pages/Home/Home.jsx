import img2 from "../../assets/OFFER.png";
import img1 from "../../assets/banner.png";
import { useEffect } from "react";
import { FetchApi } from "../../api/FetchApi";
import { useProductContext } from "../../contexts/productContext";
export const Home = () => {
  const { categoryData,dispatch,navigate,data } = useProductContext();
  const url = "/api/products";
  const categoryUrl = "/api/categories";
  useEffect(() => {
    FetchApi(url).then((data) => {
        dispatch({ type: "GET_PRODUCTS", payload: data.products });
    });
    FetchApi(categoryUrl).then((data) => {
        dispatch({ type: "GET_CATEGORY", payload: data.categories });
    });
},[dispatch]);
console.log(data)
  return (
    <>
      <div className="container">
        <div className="grid-container">
          {categoryData.map(({ categoryName, id, img }) => (
            <div key={id} className={id}>
              <img onClick={() => {
                dispatch({type:"FILTER_CATEGORY",payload:categoryName})
                navigate("/product")
              }} className="avatar-img-lg" src={img} alt="product-category" />
              <p>{categoryName}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="items">
        <div className="banner">
          <img src={img1} className="img-responsive " alt="" />
        </div>
        <div className="ad">
          <img src={img2} className="img-responsive" alt="" />
        </div>
      </div>
    </>
  );
};
