// Arrival Image =================
import img1 from "../src/assets/ArrivalPicone.png"
import img2 from "../src/assets/ArrivalPictwo.png"
import img3 from "../src/assets/ArrivalPicthree.png"
import img4 from "../src/assets/ArrivalPicfour.png"

//Best Seller Image ==============
import img5 from "../src/assets/Bestsellerone.png"
import img6 from "../src/assets/Bestsellertwo.png"
import img7 from "../src/assets/Bestsellerthree.png"
import img8 from "../src/assets/Bestsellertfour.png"

//Speacial Offer Image ============
import speacil1 from "../src/assets/Speacialone.png"
import speacil2 from "../src/assets/Speacialtwo.png"
import speacil3 from "../src/assets/Speacialthree.png"
import speacil4 from "../src/assets/Speacialfour.png"

export const ProductData = [
    {
        id: 1,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: false,
        img: img1,
        bazeitem: false,
        discount : "10%",
    },


    {
        id: 2,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: img2,
        bazeitem: true,
        discount : "10%",
    },

    {
        id: 3,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: img3,
        bazeitem: true,
        discount : "10%",
    },

    {
        id: 4,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: img4,
        bazeitem: true,
        discount : "10%",
    },
    
    
];

export const BestsellerData = [
    {
        id: 1,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: img5,
        bazeitem: true,
        discount : "10%",
    },
    {
        id: 2,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: img6,
        bazeitem: true,
        discount : "10%",
    },
    {
        id: 3,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: img7,
        bazeitem: true,
        discount : "10%",
    },
    {
        id: 4,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: img8,
        bazeitem: true,
        discount : "10%",
    },
];

export const SpecialofferData = [
    {
        id: 1,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: speacil1,
        bazeitem: true,
        discount : "10%",
    },
    {
        id: 2,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: speacil2,
        bazeitem: true,
        discount : "10%",
    },
    {
        id: 3,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: speacil3,
        bazeitem: true,
        discount : "10%",
    },
    {
        id: 4,
        Title: "Basic Crew Neck Tee",
        baze: true,
        color: true,
        img: speacil4,
        bazeitem: true,
        discount : "10%",
    },
];

export const CattagoryData = [
  {
    id: 1,
    title: "Mobile",
    subcategory: [
      { id: 1, title: "Samsung" },
      { id: 2, title: "Oppo" },
      { id: 3, title: "Vivo" },
    ],
  },

  {
    id: 2,
    title: "Apple",
    subcategory: []
  },

  {
    id: 3,
    title: "Laptop",
    subcategory: [
      { id: 1, title: "Lenevo" },
      { id: 2, title: "Dell" },
      { id: 3, title: "Asus" },
      { id: 4, title: "Hp" },
    ],
  },

  {
    id: 4,
    title: "Desktop",
    subcategory: []
  },

  {
    id: 5,
    title: "Cloth",
    subcategory: []
  },
  
];

export const ShopByColor = [
  { id: 1, ColorCode: "#000000", title: "Black"},
  { id: 2, ColorCode: "#FF8686", title: "Pink" },
  { id: 3, ColorCode: "#7ED321", title: "Green" },
  { id: 4, ColorCode: "#B6B6B6", title: "Offwhite" },
  { id: 5, ColorCode: "#15CBA5", title: "Blue" },
];

export const ShopByBrand = [
  { id: 1, title: "Brand 1"},
  { id: 2, title: "Brand 2" },
  { id: 3, title: "Brand 3" },
  { id: 4, title: "Brand 4" },
  { id: 5, title: "Brand 5" },
];


export const ShopByPrice = [
  { id: 1, title: "$0.00 - $9.99"},
  { id: 2, title: "$10.00 - $19.99" },
  { id: 3, title: "$20.00 - $29.99" },
  { id: 4, title: "$30.00 - $39.99" },
  { id: 5, title: "$40.00 - $69.99" },
];

