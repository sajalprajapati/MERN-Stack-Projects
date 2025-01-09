import React from 'react'
import Shoe from "../assets/Shoe.png"
import Heading from './Heading'
import SubHeading from './SubHeading'

const Frame = () => {
  return (
    <div>
      {/* below is the main container  */}
       <div>
           {/* heading component over here */}
           <Heading/>
  


           {/* sub heading heading component over here */}
           <SubHeading/>

           {/* button section over here */}
           <div>
              {/* div ke under button ayenge */}

              <div><button>Shop Now</button></div>

              <div><button>Category</button></div>
           </div>

            {/* small paragraph */}
            <p>Also Available On</p>


            {/* icon pack over here */}
           <div>
             <button>Flipkart</button>
             <button>Amazon</button>
           </div>
       </div>

      {/* below div is for the image of the shoe  */}
       <div>
          <img src={Shoe} height={487.06} width={530}/>
       </div>
    </div>
  )
}

export default Frame