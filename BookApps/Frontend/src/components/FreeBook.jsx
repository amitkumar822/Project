import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card/Card";

import axios from "axios";

function FreeBook() {
  //mongodb backend data connection
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get('http://localhost:4001/book')
        const filterData = res.data.filter((data) => data.category === "Free")
        setBook(filterData)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [setBook])


  // const filterData = list.filter((data) => data.category === "Free");
//   console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white bg-white text-black">
        <div>
          <h1 className=" font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos qui
            dignissimos dicta non magni quia aperiam, cumque facere beatae
            maiores blanditiis necessitatibus amet assumenda earum laboriosam
            commodi aut porro rerum.
          </p>
        </div>

        <div>
          <Slider {...settings}>
           {book.map((item) => (
            <Card item={item} key={item.id}/>
           ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
