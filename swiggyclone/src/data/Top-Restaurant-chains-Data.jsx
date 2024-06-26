const topResData = [
  {
    id: "1",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    offer: "ITEMS AT ₹169",
    title: "Chainese Wok",
    rating: "4.2",
    minTime: "45",
    maxTime: "50",
    name: "Chinese, Asian, Tibetan, Desserts",
    place: "Malleshwaram",
  },
  {
    id: "2",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2edbc28b7b8219d6e0a9c049ce06658",
    offer: "₹150 OFF ABOVE ₹399",
    title: "Leon's - Burgers & Wings",
    rating: "4.5",
    minTime: "35",
    maxTime: "45",
    name: "American, Snacks",
    place: "Sanjay Nagar",
  },
  {
    id: "3",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/garnimnzruqmizx2acjt",
    offer: "39% OFF",
    title: "Grameen Kulfi",
    rating: "4.1",
    minTime: "20",
    maxTime: "41",
    name: "Ice Cream, Desserts",
    place: "Frazer Town",
  },
  {
    id: "4",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/18d8b8fb6bac8063a6fa886e20148110",
    offer: "ITEMS AT ₹169",
    title: "NIC Ice Creams",
    rating: "4.8",
    minTime: "15",
    maxTime: "20",
    name: "Ice Cream, Desserts",
    place: "Frazer Town",
  },
  {
    id: "5",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
    offer: "40% OFF UPTO ₹80",
    title: "Subway",
    rating: "4.2",
    minTime: "35",
    maxTime: "45",
    name: "Salads, Snacks, Desserts, Beverages",
    place: "Frazer Town",
  },
  {
    id: "6",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_347868.JPG",
    offer: "20% OFF UPTO ₹50",
    title: "KFC",
    rating: "4.1",
    minTime: "20",
    maxTime: "30",
    name: "Burgers, Biryani, American",
    place: "Vasanth Nagar",
  },
  {
    id: "7",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1aa621021a2826088089b89842d4e7c",
    offer: "50% OFF UPTO ₹100",
    title: "Wendy's",
    rating: "4.2",
    minTime: "30",
    maxTime: "43",
    name: "Burgers, American, Fast Food",
    place: "Central Bangalore",
  },
  {
    id: "8",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8",
    offer: "50% OFF UPTO ₹299",
    title: "Domino's Pizza",
    rating: "4.3",
    minTime: "25",
    maxTime: "30",
    name: "Pizzas, Italian, Pastas, Desserts",
    place: "Vasanth Nagar",
  },
  {
    id: "9",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/281739aa-dde4-4b7a-b54e-6c6a811ef99a_63317.jpg",
    offer: "20% OFF UPTO ₹50",
    title: "McDonald's",
    rating: "4.2",
    minTime: "20",
    maxTime: "40",
    name: "Burgers, Beverages, Cafe, Desserts",
    place: "Malleshwaram",
  },
  {
    id: "10",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395",
    offer: "50% OFF UPTO ₹100",
    title: "Baskin Robbins - Ice Cream",
    rating: "4.5",
    minTime: "30",
    maxTime: "35",
    name: "Desserts",
    place: "Vasanth Nagar",
  },
  {
    id: "11",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/a96b7994-f501-41ce-961d-801e3198cde1_570511.JPG",
    offer: "60% OFF UPTO ₹120",
    title: "Bakingo",
    rating: "4.4",
    minTime: "35",
    maxTime: "45",
    name: "Home Food, Indian, North Indian",
    place: "6th Main Road",
  },
  {
    id: "12",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e44fd7f1e5cd9967edfe47c10247671",
    offer: "60% OFF UPTO ₹120",
    title: "Great Indian Khichdi by EatFit",
    rating: "4.3",
    minTime: "26",
    maxTime: "35",
    name: "Home Food, Indian, North Indian",
    place: "Vasanth Nagar",
  },
  {
    id: "13",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kmef6quv4n7juvyc9noh",
    offer: "40% OFF UPTO ₹80",
    title: "Nandhini Deluxe",
    rating: "4.1",
    minTime: "20",
    maxTime: "35",
    name: "North Indian, Chinese",
    place: "Seshadripuram",
  },
  {
    id: "14",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/557fa7bfa1d426639c629e17711d25fc",
    offer: "50% OFF UPTO ₹100",
    title: "Kwalit Walls Frozen Dessert",
    rating: "4.1",
    minTime: "20",
    maxTime: "35",
    name: "Desserts. Ice cream, Ice Cream",
    place: "Malleshwaram",
  },
  {
    id: "15",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
    offer: "",
    title: "Polar Bear",
    rating: "4.1",
    minTime: "20",
    maxTime: "35",
    name: "Ice Cream. Desserts",
    place: "Malleshwaram",
  },
  {
    id: "16",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/22/0f892ee4-b444-47a9-bff4-8ca1e745a5f1_492416.JPG",
    offer: "ITEMS AT ₹169",
    title: "Oven Stor Pizza",
    rating: "4.2",
    minTime: "45",
    maxTime: "50",
    name: "Chinese, Asian, Tibetan, Desserts",
    place: "Malleshwaram",
  },
];

export { topResData };
