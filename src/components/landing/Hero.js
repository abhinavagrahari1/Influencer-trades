import * as React from "react";

const Hero =()=> {
  return (
    <div className="px-20 py-6 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl text-gray-800 leading-[53px] max-md:max-w-full">
              Which Telegram Trading Channel is the best?
            </div>
            <div className="mt-3 text-xl leading-6 text-neutral-600 max-md:max-w-full">
              We Track the performance of trading calls so you can make informed
              decisions
            </div>
            <div className="justify-center self-start px-6 py-4 mt-6 text-sm leading-5 text-center text-white bg-green-500 rounded-sm max-md:px-5">
              View Performance
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe8ef3918e80164f31419e9ca115591b410e747592ecbf7586bd099e5e03498?"
            className="grow w-full aspect-[1.06] max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;