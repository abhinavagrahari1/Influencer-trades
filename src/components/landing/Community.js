import * as React from "react";

const Community =()=> {

  const communityData = []
  return (
    <div className="flex flex-col justify-center px-5 py-6 w-full bg-slate-100 max-md:max-w-full">
      <div className="self-center text-4xl font-semibold leading-10 text-center text-gray-800 max-md:max-w-full">
        View Detail Reports
      </div>
      <div className="flex justify-center items-center px-16 py-6 mt-4 w-full max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-6xl max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-4 py-6 w-full text-center bg-white rounded-lg shadow-sm text-neutral-600 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/956b3d9f901d0a3b7e1e8f3a31a736a05cc08405c8816cffb67ffe9f058239b1?"
                  className="self-center aspect-[1.16] w-[65px]"
                />
                <div className="mt-4 text-3xl font-bold leading-9">
                  Equity Curves
                </div>
                <div className="mt-2 text-sm leading-5">
                  Easy on the eyes equity curves to track the growth of account
                  over time
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-4 py-6 w-full text-center bg-white rounded-lg shadow-sm text-neutral-600 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fe23bd61ded7cc112a069ccf6e0931b33ab1bbef0d8797a5dcac8341160231c?"
                  className="self-center aspect-[1.16] w-[65px]"
                />
                <div className="mt-4 text-3xl font-bold leading-9">
                  Statistics
                </div>
                <div className="mt-2 text-sm leading-5">
                  Comprehensive analysis of success rates, average returns, and
                  more
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-4 py-6 w-full text-center bg-white rounded-lg shadow-sm text-neutral-600 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e60714f64d28d323688be1c55eca91b3a12e0832593c7d03d234a229cc8d9578?"
                  className="self-center aspect-[1.16] w-[65px]"
                />
                <div className="mt-4 text-3xl font-bold leading-9">
                  Automation
                </div>
                <div className="mt-2 text-sm leading-5">
                  Automate trades directly from channel signals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;