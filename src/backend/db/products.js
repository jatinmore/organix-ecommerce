import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    // id,img,name,categoryName,rating,price
    //Fresh Juices
    {
        _id: uuid(),
        id: "item1",
        img: "https://img.freepik.com/free-photo/side-view-apple-juice-with-red-apples-white-wooden-table_176474-1044.jpg?w=996&t=st=1685282176~exp=1685282776~hmac=3bca45e2a0882e60a6b36357c514a96d402b76a153d1144dd1eeeb1930ebd88e",
        name: "Apple Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 100)
    },

    {
        _id: uuid(),
        id: "item2",
        img: "https://img.freepik.com/free-photo/glass-orange-juice-placed-wood_1150-9670.jpg?w=996&t=st=1685284501~exp=1685285101~hmac=1ca55c345460f25d9392161f9d90ca35e08870f41b0649736ec96a5aeca16708",
        name: "Orange Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 100)
    },

    {
        _id: uuid(),
        id: "item3",
        img: "https://img.freepik.com/free-photo/cold-watermelon-smoothie-dark-background_1150-41818.jpg?w=996&t=st=1685284693~exp=1685285293~hmac=2ea57c1e9b3922404e877f2372bcd8e24ff842e1ebbdc196871b0e4b005523e2",
        name: "Watermelon Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 100)
    },

    {
        _id: uuid(),
        id: "item4",
        img: "https://img.freepik.com/free-photo/side-view-apple-juice-with-red-apples-white-wooden-table_176474-1044.jpg?w=996&t=st=1685282176~exp=1685282776~hmac=3bca45e2a0882e60a6b36357c514a96d402b76a153d1144dd1eeeb1930ebd88e",
        name: "Apple Juice",
        categoryName: "Fresh Juices",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 100)
    },

    //Vegetables
    {
        _id: uuid(),
        id: "item5",
        img: "https://img.freepik.com/premium-photo/mixed-vegetables-fruits-healthy-food-clean-eating-health_73523-2767.jpg?w=996",
        name: "Organic Veggies",
        categoryName: "Vegetables",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000)
    },



    {
        _id: uuid(),
        id: "item6",
        img: "https://img.freepik.com/premium-photo/red-tomatoes-with-cut-isolated-white_80510-576.jpg?w=996",
        name: "Tomatoes",
        categoryName: "Vegetables",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 100)
    },

    {
        _id: uuid(),
        id: "item7",
        img: "https://img.freepik.com/premium-photo/fresh-green-cabbage-chopped-part-isolated_80510-415.jpg?w=740",
        name: "Cabbage",
        categoryName: "Vegetables",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 100)
    },

    //Fruit
    {
        _id: uuid(),
        id: "item8",
        img: "https://img.freepik.com/premium-photo/fresh-mango-fruit-with-cut-green-leafs-isolated_80510-476.jpg?w=740",
        name: "Mango",
        categoryName: "Fruit",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000)
    },

    {
        _id: uuid(),
        id: "item8",
        img: "https://img.freepik.com/premium-photo/ripe-strawberries-with-leaves-isolated-white_80510-607.jpg?w=900",
        name: "Strawberries",
        categoryName: "Fruit",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000)
    },

    {
        _id: uuid(),
        id: "item9",
        img: "https://img.freepik.com/premium-photo/ripe-sliced-avocado-isolated-white_80510-1236.jpg?w=826",
        name: "Avocado",
        categoryName: "Fruit",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000)
    },

    //Dry Fruits
    {
        _id: uuid(),
        id: "item10",
        img: "https://img.freepik.com/premium-photo/open-walnuts-isolated_80510-878.jpg?w=740",
        name: "Walnuts",
        categoryName: "Dry Fruits",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000)
    },

    {
        _id: uuid(),
        id: "item11",
        img: "https://img.freepik.com/premium-photo/cashew-nut-closeup-white-isolated_183352-2346.jpg?w=900",
        name: "Cashew",
        categoryName: "Dry Fruits",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000)
    },

    //Dairy

    {
        _id: uuid(),
        id: "item12",
        img: "https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yZ2FuaWMlMjBtaWxrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        name: "Organic Milk",
        categoryName: "Dairy",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 100)
    },

    {
        _id: uuid(),
        id: "item13",
        img: "https://www.jiomart.com/images/product/600x600/rvqts6o9tu/bhumi-organic-desi-cow-ghee-1-litter-lab-tested-perfect-aroma-danedar-ghee-curd-churned-no-added-color-and-preservatives-no-added-fragrance-100-pure-hand-made-cow-ghee-organic-ghee-glass-jar-1-ltr-tin-5-ltr-product-images-orvqts6o9tu-p600232232-0-202304211054.jpg",
        name: "Organic Ghee",
        categoryName: "Dairy",
        rating: Math.floor(Math.random() * 5 + 1),
        price: Math.floor(Math.random() * 1000)
    },



];