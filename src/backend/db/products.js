import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [{
        _id: uuid(),
        id: "item1",
        img: "https://img.freepik.com/free-photo/side-view-apple-juice-with-red-apples-white-wooden-table_176474-1044.jpg?w=996&t=st=1685282176~exp=1685282776~hmac=3bca45e2a0882e60a6b36357c514a96d402b76a153d1144dd1eeeb1930ebd88e",
        name: "Apple Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5),
        price: Math.floor(Math.random() * 1000)
    },

    {
        _id: uuid(),
        id: "item2",
        img: "https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9670.jpg?w=996&t=st=1685284501~exp=1685285101~hmac=1ca55c345460f25d9392161f9d90ca35e08870f41b0649736ec96a5aeca16708",
        name: "Orange Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5),
        price: Math.floor(Math.random() * 1000)
    },

    {
        _id: uuid(),
        id: "item3",
        img: "https://img.freepik.com/free-photo/cold-watermelon-smoothie-dark-background_1150-41818.jpg?w=996&t=st=1685284693~exp=1685285293~hmac=2ea57c1e9b3922404e877f2372bcd8e24ff842e1ebbdc196871b0e4b005523e2",
        name: "Watermelon Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5),
        price: Math.floor(Math.random() * 1000)
    },

    {
        _id: uuid(),
        id: "item4",
        img: "https://img.freepik.com/free-photo/side-view-apple-juice-with-red-apples-white-wooden-table_176474-1044.jpg?w=996&t=st=1685282176~exp=1685282776~hmac=3bca45e2a0882e60a6b36357c514a96d402b76a153d1144dd1eeeb1930ebd88e",
        name: "Apple Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5),
        price: Math.floor(Math.random() * 1000)
    },

    {
        _id: uuid(),
        id: "item1",
        img: "https://img.freepik.com/free-photo/side-view-apple-juice-with-red-apples-white-wooden-table_176474-1044.jpg?w=996&t=st=1685282176~exp=1685282776~hmac=3bca45e2a0882e60a6b36357c514a96d402b76a153d1144dd1eeeb1930ebd88e",
        name: "Apple Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5),
        price: Math.floor(Math.random() * 1000)
    },



];