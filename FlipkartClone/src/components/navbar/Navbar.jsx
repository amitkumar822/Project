import React, { useState } from "react";
import {
  AdvertisementIcon,
  BucketIcon,
  BucketStoreIcon,
  CustomerCareIcon,
  DownloadIcon,
  FlipkartLogoIcon,
  FlipkartPlushZoneIcon,
  GiftCardIcon,
  LoginIcon,
  MenuBtnIcon,
  NotificationIcon,
  OrdersIcon,
  ProfileIcon,
  RewardsIcon,
  SearchBarIcon,
  ThreeDotIcon,
  WishlistIcon,
} from "./IconNavbar";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [isHoveringLogin, setisHoveringLogin] = useState(false);

  const handleMouseOver = () => setisHoveringLogin(true);
  const handleMouseLeave = () => setisHoveringLogin(false);

  const [isHoverThreeDot, setisHoverThreeDot] = useState(false); //false

  const handleMouseOverThreeDot = () => setisHoverThreeDot(true);
  const handleMouseLeaveThreeDot = () => setisHoverThreeDot(false);

  const [inputTogleHover, setInputTogleHover] = useState(false);
  const handleMouseOverInput = () => setInputTogleHover(!inputTogleHover);
  // const handleMouseLeaveInput = () => setInputTogleHover(false);

  return (
    <>
      {/* <div className=" w-full h-screen"
          onClick={handleMouseOverInput}
      > */}
        <div className="bg-white">
          <div
            className=" w-[88%] mx-auto h-[60px] bg-white flex items-center cursor-pointer"
          >
            <div className="md:hidden">
              <MenuBtnIcon />
            </div>
            <div className={`pl-12 scale-110 relative`}>
              <FlipkartLogoIcon />
            </div>
            <div className="hidden min-w-[394px] w-[60%] md:flex items-center  bg-white rounded-xl pl-4">
              <SearchBarIcon className=" absolute" />
              <input
                onClick={handleMouseOverInput}
                // onMouseLeave={handleMouseLeaveInput}
                className=" min-w-[290px] bg-[#F0F5FF] w-full relative outline-none px-4 py-2 rounded-r-xl"
                type="text"
                placeholder="Search for Products, Brands and More"
              />

              <div
                onClick={handleMouseOverInput}
                className={`${
                  inputTogleHover ? "" : "hidden"
                } absolute top-12 text-[12px] min-w-[290px] w-[40%] bg-white pl-2 rounded-xl`}
              >
                <div>
                  <ul>
                    <li className="flex items-center mb-1">
                      <img
                        className="w-8 h-8"
                        src="https://rukminim2.flixcart.com/www/100/100/promos/19/07/2018/321e89f8-9ffa-47a7-a9d4-731da9bde6c4.png?q=90"
                        alt=""
                      />
                      <span className="">i3 laptop 8gen</span>
                    </li>
                    <li className="flex items-center mb-1">
                      <img
                        className="w-8 h-8"
                        src="https://rukminim2.flixcart.com/www/100/100/promos/19/07/2018/321e89f8-9ffa-47a7-a9d4-731da9bde6c4.png?q=90"
                        alt=""
                      />
                      <div>
                        <span>
                          i5 12<sup>th</sup>gen
                        </span>
                        <li className=" text-blue-700">in Laptops</li>
                      </div>
                    </li>
                  </ul>
                  <h1 className="text-[#6a6969] font-bold">Discover More</h1>
                  <ul>
                    <li className="flex items-center mb-1">
                      <img
                        className="w-8 h-8"
                        src="https://rukminim2.flixcart.com/www/100/100/promos/20/07/2022/ea2077a7-575d-4fb9-a4dd-6df16e53c5d8.png?q=90"
                        alt=""
                      />
                      react js books
                    </li>
                    <li className="flex items-center mb-1">
                      <img
                        className="w-8 h-8"
                        src="https://rukminim2.flixcart.com/www/100/100/promos/20/07/2022/ea2077a7-575d-4fb9-a4dd-6df16e53c5d8.png?q=90"
                        alt=""
                      />
                      mobile
                    </li>
                    <li className="flex items-center mb-1">
                      <img
                        className="w-8 h-8"
                        src="https://rukminim2.flixcart.com/www/100/100/promos/20/07/2022/ea2077a7-575d-4fb9-a4dd-6df16e53c5d8.png?q=90"
                        alt=""
                      />
                      shose
                    </li>
                    <li className="flex items-center mb-1">
                      <img
                        className="w-8 h-8"
                        src="https://rukminim2.flixcart.com/www/100/100/promos/20/07/2022/ea2077a7-575d-4fb9-a4dd-6df16e53c5d8.png?q=90"
                        alt=""
                      />
                      t shirts
                    </li>
                    <li className="flex items-center mb-1">
                      <img
                        className="w-8 h-8"
                        src="https://rukminim2.flixcart.com/www/100/100/promos/20/07/2022/ea2077a7-575d-4fb9-a4dd-6df16e53c5d8.png?q=90"
                        alt=""
                      />
                      html book
                    </li>
                    <li className="flex items-center mb-1">
                      <img
                        className="w-8 h-8"
                        src="https://rukminim2.flixcart.com/www/100/100/promos/20/07/2022/ea2077a7-575d-4fb9-a4dd-6df16e53c5d8.png?q=90"
                        alt=""
                      />
                      smart tv
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex w-[700px] mx-auto justify-end gap-[7%] left-0 text-[14px]">
              <div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`w-[100px] h-10 flex items-center gap-1 cursor-pointer hover:text-white px-2 rounded-xl relative bg-blue-${isHoveringLogin? 500 : 0} text-${isHoveringLogin ? "white" : ""}`}
                >
                  <LoginIcon />
                  <span>Login</span>
                  <IoIosArrowDown className="text-[20px]" />
                </div>
                {isHoveringLogin && <LoginHoverForm />}
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <BucketStoreIcon />
                <span className="hidden lg:block">Cart</span>
              </div>
              <div className="md:flex hidden items-center gap-2 cursor-pointer">
                <BucketIcon />
                <span className="hidden lg:block">Become a Seller</span>
              </div>

              <div
                onMouseOver={handleMouseOverThreeDot}
                onMouseLeave={handleMouseLeaveThreeDot}
                className="md:flex hidden items-center relative"
              >
                <div
                  className={`border border-white rounded-md py-1  cursor-pointer border-blue-${parseInt(
                    [`${isHoverThreeDot ? `500` : ``}`]
                  )}`}
                >
                  <ThreeDotIcon />
                </div>
                {isHoverThreeDot && <ThreeDotHoverForm />}
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

const LoginHoverForm = () => {
  return (
    <>
      <div className=" w-[230px] text-[#2e2e2e] absolute bg-white border rounded-xl">
        <div className="flex justify-between px-2 pt-3 pb-2 items-center border-b border-[#c0bebe]">
          <h1 className="text-[#2e2e2e] text-[15px]">New customer?</h1>
          <div>
            <button className=" text-[blue] font-bold text-[17px]">
              Sign Up
            </button>
          </div>
        </div>

        <ul className=" text-[12px] ml-3 mt-3">
          <li className="flex gap-2 pt-1">
            <ProfileIcon />
            My Profile
          </li>
          <li className="flex gap-2 pt-3">
            <FlipkartPlushZoneIcon />
            Flipkart Plus Zone
          </li>
          <li className="flex gap-2 pt-3">
            <OrdersIcon />
            Orders
          </li>
          <li className="flex gap-2 pt-3">
            <WishlistIcon />
            Wishlist
          </li>
          <li className="flex gap-2 pt-3">
            <RewardsIcon />
            Rewards
          </li>
          <li className="flex gap-2 pt-2 pb-3">
            <GiftCardIcon />
            Gift Cards
          </li>
        </ul>
      </div>
    </>
  );
};

const ThreeDotHoverForm = () => {
  return (
    <>
      <div className=" w-[200px] absolute bg-white border rounded-xl right-0 top-10">
        <ul className=" text-[14px] font-semibold ml-3 mt-3">
          <li className="flex gap-2 pt-2">
            <NotificationIcon />
            Notification Preferences
          </li>
          <li className="flex gap-2 pt-4">
            <CustomerCareIcon />
            24x7 Customer Care
          </li>
          <li className="flex gap-2 pt-4">
            <AdvertisementIcon />
            Advertise
          </li>
          <li className="flex gap-2 pt-4 mb-5">
            <DownloadIcon />
            Download App
          </li>
        </ul>
      </div>
    </>
  );
};

// const ThreeDotHoverForm = () => {
//   return (
//     <>
//       <div className=" w-[230px] text-[#2e2e2e] bg-white border rounded-xl">

//         <ul className=" text-[12px]">
//           <li className="flex gap-2 pt-1">
//             <ProfileIcon />
//             My Profile
//           </li>
//           <li className="flex gap-2 pt-3">
//             <FlipkartPlushZoneIcon />
//             Flipkart Plus Zone
//           </li>
//           <li className="flex gap-2 pt-3">
//             <OrdersIcon />
//             Orders
//           </li>
//           <li className="flex gap-2 pt-3">
//             <WishlistIcon />
//             Wishlist
//           </li>
//           <li className="flex gap-2 pt-3">
//             <RewardsIcon />
//             Rewards
//           </li>
//           <li className="flex gap-2 pt-2 pb-3">
//             <GiftCardIcon />
//             Gift Cards
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

export default Navbar;
