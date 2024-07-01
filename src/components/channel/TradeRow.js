import React from "react";

const TradeRow = (props) => {
    console.log("..........",props)
   return(<>
        <div className="flex gap-0 mt-3 text-base text-gray-800 max-md:flex-wrap max-md:max-w-full">
      <time className="justify-center py-3">{props.trade.date}</time>
      <div className="justify-center py-3">{props.trade.asset}</div>
      <div className="flex flex-col justify-center py-2">
        <div className={`justify-center px-3.5 py-1.5 rounded-md ${props.trade.side === "Buy" ? "bg-green-600" : "bg-red-500"} text-white`}>
          {props.trade.side}
        </div>
      </div>
      <time className="justify-center items-start px-2 py-3 whitespace-nowrap max-md:pl-6">{props.trade.entryTime}</time>
      <time className="justify-center items-start px-2 py-3 whitespace-nowrap max-md:pl-7">{props.trade.exitTime}</time>
      <div className="justify-center items-start px-2 py-3 whitespace-nowrap max-md:pl-7">{props.trade.result}</div>
      </div>
   </>)
}

export default TradeRow;