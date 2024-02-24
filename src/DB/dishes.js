import dhokla from ".././assests/dhokla.webp"
import dosa from ".././assests/dosa.webp"
import oats from ".././assests/oats.jpg"
import poha from ".././assests/poha-recipe-768x1152.jpg.webp"
import halwaPuri from "../assests/poori-puri-recipe-768x1152.jpg.webp"
import upma from ".././assests/upma-recipe-768x1152.jpg.webp"
const dishesDB = [
    {
        name: "Dhokla",
        category: "Breakfast",
        description: "Dhokla is a savoury sponge dish that is native to the Indian state of Gujarat",
        price: "120",
        imgSrc:dhokla
    },
    {
        name: "Dosa",
        category: "Lunch",
        price: "110",
        description: "A dosa is South Indian, fermented crepe made from rice batter and black lentils",
        imgSrc:dosa
    },
    {
        name: "Oats",
        category: "Breakfast",
        price: "50",
        description: "Oats, formally named Avena sativa, is a type of cereal grain from the Poaceae grass family of plants",
        imgSrc:oats
    },
    {
        name: "Poha",
        category: "Breakfast",
        price: "20",
        description: "Poha, also known as pohe, pauwa is flattened rice originating from the Indian subcontinent.",
        imgSrc:poha
    },
    {
        name: "Halwa Puri",
        category: "Lunch",
        price: "100",
        description: "There are numerous types but the basic one is the sooji ka halwa made out of ghee,semolina,sugar,milk and dry fruits.",
        imgSrc:halwaPuri
    },
    {
        name: "Upma",
        category: "Breakfast",
        price: "50",
        description: "Upma is a flavorful, tasty, savory and popular South Indian breakfast that is made with cream of wheat",
        imgSrc:upma
    },
    {
        name: "North Indian Thali",
        category: "Lunch",
        description: "North Indian Thali include dal (lentil), rice, vegetable curry, roti (flat bread), dahi (yogurt), papad, salad, a small amount of chutney or pickle and a sweet dish",
        price: "180",
        imgSrc:"https://static.toiimg.com/photo/94078477.cms"
    },
    {
        name: "South Indian Thali",
        category: "Lunch",
        price: "210",
        description: "A typical Tamil Nadu thali may include rice, sambar, rasam, kuzhambu, poriyal, aviyal, thogayal, papad, pickle, and buttermilk",
        imgSrc:"https://media.assettype.com/homegrown/import/book/kuhwlbayxs-1533040300.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
    },
    {
        name: "Roti Sabji",
        category: "Dinner",
        price: "90",
        description: "Roti sabji is a regular day to day meal in North Indian cuisine. Roti is an Asian bread made of any cereal flour. ",
        imgSrc:"https://cdn.dotpe.in/longtail/store-items/7697767/TX9qCj2f.jpeg"
    },
    {
        name: "Chhole Kulche",
        category: "Dinner",
        price: "140",
        description: "A traditional Punjabi recipe, Chole Kulche is made from maida (white refined flour) and cooked in a tandoor. ",
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVhPIUgK7GXtrCkurrZbKVb6wI6F7hh6HoGeB9DPS_g&s"
    },
    {
        name: "Veg Pulao",
        category: "Dinner",
        price: "190",
        description: "Veg pulao or Vegetable pulav which is forked from the famous meat pulao made with long grain rice, mixed vegetables, and herbs",
        imgSrc:"https://media.assettype.com/homegrown/import/book/kuhwlbayxs-1533040300.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
    },
    {
        name: "Matar Panner",
        category:"Dinner",
        price: "185",
        description: "Matar paneer recipe is a versatile North Indian curry with many different variations. Learn this flavorful home-style Punjabi mutter paneer.",
        imgSrc:"https://www.honeywhatscooking.com/wp-content/uploads/2023/11/Matar-Paneer-featured-1.jpg"
    },
]
export default dishesDB;