const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const menuItems = [
  {
    name: "Chicken Biryani",
  description: "Aromatic basmati rice with slow-cooked spices",
  price: 180,
  category: "Rice",
  image: "/menu/chicken_biryani.jpg"

  },
  {
    name: "Paneer Butter Masala",
    description: "Creamy tomato gravy with soft paneer cubes",
    price: "160",
    category: "Curry",
    image: "/menu/paneer_butter_masala.jpg"

  },
  
  {
    name: "Grilled Chicken",
    description: "Smoky, juicy, and perfectly seasoned",
    price: "220",
    category: "Grill",
    image: "/menu/grilled_chicken.jpg"

  },
];

app.get("/menu", (req, res) => {
  res.json(menuItems);
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});