# 1 Create vite project:- npm create vite@latest

# 2 install tailwind:- 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3 install Daisy UI(Link):- https://daisyui.com/components/
# install Daisy:- npm i -D daisyui@latest

Note:- all Navbar components use the DaisyUI navbar components, so you can just import and use them as normal.

# 4 FreePick website chose free photos Link:- https://www.freepik.com/search?format=search&last_filter=query&last_value=books&query=books


# 5 React Slick Link:- https://react-slick.neostack.com/docs/get-started
👉 Notes:- this react Slide card  

1. Install:- npm install react-slick --save
2. Install:- npm install slick-carousel --save (css)

3. import some slick css where necessary and use it as normal.  
 👉 import "slick-carousel/slick/slick.css";
 👉 import "slick-carousel/slick/slick-theme.css";
 👉 import "slick-carousel/slick/slick-theme.css";

4. And go to -> Examples -> Responsive -> copy (var settings)

 👉 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


# 6 Use react-hook-form   Link:- https://react-hook-form.com/get-started
Note:- React hook form he check login or signup from fill or not fill requaired check
# 👉 Install:- npm install react-hook-form 



# 7 install:- npm i axios
Link:- https://www.npmjs.com/package/axios

# 8 install:- npm install react-hot-toast      👉(like react toastify )
Link:- https://react-hot-toast.com/docs

👉Note:- React hot toast he check login or signup from fill or not fill requaired check and show some toast message as success or fail and also have a option to auto close the toast after some time if you want to keep it open then just set the duration to 0.0 seconds.