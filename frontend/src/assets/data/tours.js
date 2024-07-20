import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg0 from "../images/tour-img0.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg10 from "../images/tour-img10.jpg";


const tours = [

  {
    id: "01",
    title: "Tangier Tales Gateway to Morocco s Northern Wonders",
    city: "Tanger",
    Slep1: "3 Days, 2 Nights",
    distance: 500,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: "Uncover the northern treasures of Morocco in a 3-day journey from Tangier, traversing the charming landscapes of Tetouan, exploring the ancient ruins of Volubilis, and ending in the cultural hub of Fes.",
    reviews: [
      {
        name : "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },

  {
    id: "02",
    title: "Imperial Cities Extravaganza Rabat, Meknes, Fez, and Marrakech",
    city: "Rabat",
    Slep1: "5 Days, 4 Nights",
    distance: 500,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: " Dive into Morocco s imperial history with a 5-day tour starting in Rabat, exploring the grandeur of Meknes, immersing in the cultural richness of Fez, and concluding in the vibrant Marrakech.",
    reviews: [
      {
        name : "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: true,
  },

  {
    id: "08",
    title: "Casablanca and Beyond Coastal Charms and Historical Wonders",
    city: "Casablanca",
    Slep1: "4 Days, 3 Nights",
    distance: 500,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: " Discover the cosmopolitan city of Casablanca, with its blend of modern and traditional architecture. This tour includes a visit to the iconic Hassan II Mosque, a trip to the historical town of El Jadida, and a taste of the city s vibrant nightlife.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg0,
    featured: false,
  },

  {
    id: "06",
    title: "Enchanting Morocco: From Marrakech to the Atlas Mountains",
    city: "Marrakech",
    Slep1: "7 Days, 6 Nights",
    distance: 500,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: " This tour takes you on a journey through the vibrant city of Marrakech, exploring its colorful souks, historic palaces, and bustling squares. You'll venture into the Atlas Mountains for breathtaking scenery and cultural experiences, including a camel ride in the Agafay Desert.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  


  {
    id: "04",
    title: "Agadir and the South  Sun, Sand, and Adventure     ",
    city: "Agadir",
    Slep1: "3 Days, 2 Nights",
    distance: 500,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: "",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },



  {
    id: "05",
    title: "3 Days from Ouarzazate to Merzouga ",
    city: "Ouarzazate",
    Slep1: "5 Days, 4 Nights",
    distance: 300,
    address: "Morocco",
    price: 99,
    maxGroupSize: 10,
    desc: "Experience the ultimate Ouarzazate desert tour with this 3-day, 2-night adventure to Merzouga and Erg Chebbi’s golden sand dunes. Explore the lush green valleys of palm trees, trek through the breathtaking Todra Gorges, enjoy a camel riding experience, and spend a night in a luxurious Berber tent. Cross the impressive Atlas Mountains and discover one of Morocco’s most famous golden sand dunes. This unique 3 day from Ouarzazate to Merzouga promises an unforgettable trip.",
    reviews: [
      {
        name : "jhon doe",
        rating: 4.6,
      },
      {
        name : "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },

  {
    id: "03",
    title: "Fes to Marrakech Morocco Desert tours itinerary ",
    city: "Fes",
    Slep1 : "5 Days,4 Night",
    distance: 500,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: "Fes to Marrakech luxury desert tour – itinerary : 1st day: Fes – Midelt. ... 2nd day: Midelt – Merzouga. ...3rd day: Merzouga – Dades Gorges. ...4th day: Dades Gorges – Ouarzazate. ...5th day: Ouarzazate – Marrakech.",
    reviews: [
      {
        name : "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  

  {
    id: "07",
    title: "Atlantic Breezes: Essaouira and Surroundings",
    city: "Essaouira",
    Slep1 : "3 Days,2 Nights",
    distance: 500,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: "Experience the coastal charm of Essaouira, known for its historic medina and beautiful beaches. This tour includes a guided exploration of the city, time to relax by the sea, and a visit to the bustling fish market and port.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "09",
    title: "Ifrane's Alpine Adventures: Nature and Relaxation",
    city: "Ifrane",
    Slep1: "3 Days, 2 Nights",
    distance: 400,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: "Discover the Alpine charm of Ifrane with a 3-day tour that includes exploring the pristine forests, hiking in the national parks, and visiting the famous Al Akhawayn University. Experience the tranquility and natural beauty of this unique Moroccan town.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  },

  {
    id: "10",
   title: "Tetouan's Treasures: A Journey Through History and Culture",
    city: "Tetouan",
    Slep1: "2 Days, 1 Night",
    distance: 500,
    address: "Morocco",
    price: 99,
    maxGroupSize: 8,
    desc: "Explore the rich cultural heritage of Tetouan, a city known for its beautiful medina, a UNESCO World Heritage site. This tour includes visits to the Archaeological Museum, the Ethnographic Museum, and a walk through the historic old town.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },

];

export default tours;
