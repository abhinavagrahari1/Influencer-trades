import React from 'react';

const Stat = (props)=>{
  return(
    <div className="flex grow gap-5 justify-between max-md:mt-10">
    <div className="flex flex-col text-black leading-[150%]">
      <div className="text-3xl font-semibold">{props.value}</div>
      <div className="flex gap-2 pr-1.5 mt-4 text-base">
        <div>{props.label}</div>
        <img loading="lazy" src={props.imgSrc} className="shrink-0 w-6 aspect-square" alt={props.altText} />
      </div>
    </div>
    <div className="flex justify-center items-center self-start p-2.5 w-11 h-11 bg-white rounded-xl shadow-sm">
      <img loading="lazy" src={props.imgSrc} className="w-6 aspect-square" alt={props.altText} />
    </div>
  </div>
  ) 
}

export default Stat;