import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductDetail } from "./pages/ProductCard/ProductDetail";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Login } from "./pages/LoginSignup/LoginSignup";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { RequiresAuth } from "./components/RequiresAuth";
import Mockman from "mockman-js";
import { Checkout } from "./pages/Checkout/Checkout";
import { User } from "./pages/User/User";

function App() {
    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/mockman"
        element = { < Mockman / > }
        />{" "} <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "product"
        element = { < Product / > }
        />{" "} <
        Route path = "cart"
        element = { <
            RequiresAuth >
            <
            Cart / >
            <
            /RequiresAuth>
        }
        />{" "} <
        Route path = "/wishlist"
        element = { <
            RequiresAuth >
            <
            Wishlist / >
            <
            /RequiresAuth>
        }
        />{" "} <
        Route path = "/productDetail"
        element = { < ProductDetail / > }
        />{" "} <
        Route path = "/login"
        element = { < Login / > }
        />{" "} <
        Route path = "/checkout"
        element = { < Checkout / > }
        /> <
        Route path = "/user"
        element = { < User / > }
        /> < /
        Routes > { " " } <
        /div>
    );
}

export default App;