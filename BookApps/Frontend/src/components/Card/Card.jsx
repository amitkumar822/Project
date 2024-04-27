import React from "react";

function Card({item}) {
    // console.log(item);
  return ( 
    <>
      <div className=" mt-10 p-3">
        <div className="card shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border dark:border-[yellow]  border border-[black] bg-white">
          <figure>
            <img
             className=" h-[309px] w-[309px]"
              src={item.image}
            //   alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between">
              <div className=" text-lg text-blue-600 dark:text-blue-500">{item.name}</div>
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="px-3 py-1 bg-yellow-300 text-black rounded-xl border-[2px] ">{`₹ ${item.price}`}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] bg-lime-400 text-black  hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
