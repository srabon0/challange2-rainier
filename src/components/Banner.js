import React from "react";
import NameDashBoard from "./NameDashBoard";
import Steps from "./Steps";

const Banner = () => {
  return (
    <div className="lg:w-auto grid lg:grid-cols-5 md:grid-cols-4 grid-rows-4 gap-10 order-1 container">
        <NameDashBoard></NameDashBoard>
     


      <div class="mx-2 lg:col-span-2 md:col-span-3  row-span-2 h-auto bg-base-100 text-primary-content order-2">
      <p className="m-2">Upcoming Events</p>
        <div class="card-body">
            <Steps></Steps>

        
         
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
