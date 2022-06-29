import React from "react";
import Hug from "./Hug";
import NameDashBoard from "./NameDashBoard";
import StatusCard from "./StatusCard";
import Steps from "./Steps";
import Todolist from "./Todolist";

const Banner = () => {
  return (
    <div className="lg:flex lg:justify-between relative">
      <div>
        <NameDashBoard></NameDashBoard>
        <StatusCard></StatusCard>
        <Todolist></Todolist>
        
      </div>
      <div className="lg:block hidden">
        <Steps></Steps>
        <Hug></Hug>

      </div>

    </div>
    // <div className="lg:w-auto grid lg:grid-cols-5 md:grid-cols-4 grid-rows-4 gap-10 order-1 container">
    //     <NameDashBoard></NameDashBoard>
     


    //   <div class="mx-2 lg:col-span-2 md:col-span-3  row-span-2 h-auto bg-base-100 text-primary-content order-2">
      
    //   </div>
    // </div>
  );
};

export default Banner;
