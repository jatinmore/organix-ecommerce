import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext, ProductProvider } from "./contexts/productContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Call make Server
makeServer();
export { ProductContext };
root.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
