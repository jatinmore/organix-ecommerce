import { useState } from "react";
import { useEffect } from "react";
import img2 from "../../assets/OFFER.png";
import img1 from "../../assets/banner.png";
export const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setData(data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="grid-container">
          {data.map(({ categoryName, id, img }) => (
            <div key={id} className={id}>
              <img className="avatar-img-lg" src={img} alt="product-category" />
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
