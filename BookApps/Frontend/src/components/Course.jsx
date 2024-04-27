import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Card from "./Card/Card";
import { Link } from "react-router-dom";
import axios from 'axios'

const Course = () => {
  //✅data patch mongodb backend
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get('http://localhost:4001/book')
        // console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [setBook])


  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white bg-white text-black">
        <div className=" pt-28 items-center justify-center text-center ">
          <h1 className=" text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className=" text-pink-500">Here! :)</span>
          </h1>

          <p className=" mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            odio possimus eligendi, reiciendis dolores rem necessitatibus
            suscipit distinctio harum beatae cum facilis non dolorum ex magni
            adipisci natus fugiat maxime. Doloremque nemo culpa veritatis et
            asperiores dolores quae quis quam laborum iste blanditiis eius
            praesentium deserunt ratione sint numquam, similique vitae odio
            repudiandae ut. Magnam libero expedita rerum id enim! Perspiciatis
            dicta illum similique iusto distinctio culpa ipsam labore
            voluptatibus delectus adipisci consectetur, molestiae dolore
            nesciunt dolorum iste quaerat facere itaque ut. Alias nisi
            consectetur cum amet dolorem libero commodi!
          </p>
          <Link
            to="/"
          >
            <button className=" bg-pink-500 px-4 py-2 text-white rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (//list.map((item)=>{}), local frontend store data
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
