import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [{
        _id: uuid(),
        id: "item1",
        categoryName: "Fruit",
        img: "https://img.freepik.com/free-photo/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple_23-2147968680.jpg?w=900",

    },

    {
        _id: uuid(),
        id: "item2",
        categoryName: "Vegetables",
        img: "https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?w=996"
    },

    {
        _id: uuid(),
        id: "item3",
        categoryName: "Dry Fruits",
        img: "https://img.freepik.com/free-photo/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls_176474-2051.jpg?w=900",

    },

    {
        _id: uuid(),
        id: "item4",
        categoryName: "Dairy",
        img: "https://img.freepik.com/free-photo/dairy-products_114579-8756.jpg?w=360",

    },

    {
        _id: uuid(),
        id: "item5",
        categoryName: "Fresh Juices",
        img: "https://img.freepik.com/free-photo/front-view-fresh-fruit-cocktails-with-fresh-fruit-slices-ice-cooling-blue-drink-juice-cocktail-fruit-color_140725-24741.jpg?w=996",

    },
];