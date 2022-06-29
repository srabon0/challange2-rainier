import React from "react";

const stats = [
  {
    id: 1,
    name: "Pulse Count",
    unit: "60 bpm",
    status: "normal",
    img: "heart",
  },
  {
    id: 2,
    name: "Pulse Count",
    unit: "60 bpm",
    status: "normal",
    img: "blood",
  },
  {
    id: 3,
    name: "Pulse Count",
    unit: "60 bpm",
    status: "normal",
    img: "oxygen",
  },
  {
    id: 4,
    name: "Pulse Count",
    unit: "60 bpm",
    status: "normal",
    img: "gloucose",
  },
];

const StatusCard = () => {
  return <div className="flex gap-x-6 my-4 mx-2 px-2">
    {
        stats.map(single=><SingleStatusCard key={single.id} single={single} ></SingleStatusCard>)
    }
  </div>;
};

export default StatusCard;

const SingleStatusCard = ({single}) => {
    const {id,name,unit,status,img} = single
  return (
    <div class="w-[153px] h-[157px]  bg-base-100 shadow-lg rounded-lg border text-primary-content">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        
      </div>
    </div>
  );
};
