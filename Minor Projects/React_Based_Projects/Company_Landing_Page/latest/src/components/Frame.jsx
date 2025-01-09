// import React from 'react'
// import Shoe from "../assets/Shoe.png"
// import Heading from './Heading'
// import SubHeading from './SubHeading'

// const Frame = () => {
//   return (
//     <div>
//       {/* below is the main container  */}
//        <div>
//            {/* heading component over here */}
//            <Heading/>
  


//            {/* sub heading heading component over here */}
//            <SubHeading/>

//            {/* button section over here */}
//            <div>
//               {/* div ke under button ayenge */}

//               <div><button>Shop Now</button></div>

//               <div><button>Category</button></div>
//            </div>

//             {/* small paragraph */}
//             <p>Also Available On</p>


//             {/* icon pack over here */}
//            <div>
//              <button>Flipkart</button>
//              <button>Amazon</button>
//            </div>
//        </div>

//       {/* below div is for the image of the shoe  */}
//        <div>
//           <img src={Shoe} height={487.06} width={530}/>
//        </div>
//     </div>
//   )
// }

// export default Frame










import React from 'react';
import Shoe from '../assets/Shoe.png';
import Heading from './Heading';
import SubHeading from './SubHeading';

const Frame = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col items-start space-y-6 max-w-lg">
        <Heading />
        <SubHeading />

        {/* Buttons Section */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
            Shop Now
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 transition duration-200">
            Category
          </button>
        </div>

        {/* Small Paragraph */}
        <p className="text-gray-500 text-sm">Also Available On</p>

        {/* Icon Pack */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-gray-300 transition duration-200">
            Flipkart
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-gray-300 transition duration-200">
            Amazon
          </button>
        </div>
      </div>

      {/* Shoe Image */}
      <div className="mt-8 md:mt-0">
        <img src={Shoe} alt="Shoe" className="w-80 md:w-96 object-contain" />
      </div>
    </div>
  );
};

export default Frame;
