import React from "react";
import {BiCheck} from "react-icons/bi";
const Todolist = () => {
  return (
    <>
      <div class="mx-2 lg:w-[718px] lg:h-[445px] md:col-span-4 px-2 rounded-md bg-base-100 border shadow-lg  text-primary-content order-1">
        <div className="m-4 flex">
            <textarea className="border-2 rounded-md" name="todo" id="" cols="74" rows="5"></textarea>
            <button className="btn border-none text-white rounded-md text-md btn-sm gradBtn mx-4" > <span className="text-xl mr-2"><BiCheck></BiCheck></span> Add</button>
        </div>
        <div className="m-4">
            <div className="flex flex-row justify-between" >
            <div className="flex flex-row space-x-2"><input type="checkbox" className="w-6 redInput" /> <p className="text-lg text-black">Select All</p></div>
            <button className="btn border-none text-white rounded-md text-md btn-sm gradBtn mx-4" > <span className="text-xl mr-2"><BiCheck></BiCheck></span> Done</button>


            </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
