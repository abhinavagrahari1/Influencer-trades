import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-center items-center px-16 py-6 mt-6 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
          <div className="w-full max-w-[1110px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-20 max-md:mt-10">
                  <div className="flex gap-1 self-start">
                    <div className="flex overflow-hidden relative flex-col justify-center aspect-square w-[66px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cd1cffb116c77335c302f3e83b19010e99ededfa14f95ebc1df5632135a7b01?"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="relative shrink-0 w-full border-2 border-green-500 border-solid bg-zinc-300 bg-opacity-0 h-[66px]" />
                    </div>
                    <div className="flex-auto my-auto text-3xl text-center text-green-500">
                      Influencer <br />
                      Trades
                    </div>
                  </div>
                  <div className="mt-10 text-sm leading-5 text-slate-100">
                    All rights reserved
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                <div className="max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-sm leading-5 text-slate-100 max-md:mt-8">
                        <div className="text-xl font-semibold leading-7 text-white">
                          Company
                        </div>
                        <div className="mt-6">Blog</div>
                        <div className="mt-3">Contact us</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-sm leading-5 text-slate-100 max-md:mt-8">
                        <div className="text-xl font-semibold leading-7 text-white">
                          Support
                        </div>
                        <div className="mt-6">Help center</div>
                        <div className="mt-3">Terms of service</div>
                        <div className="mt-3">Legal</div>
                        <div className="mt-3">Privacy policy</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col max-md:mt-8">
                        <div className="text-xl font-semibold leading-7 text-white">
                          Stay up to date
                        </div>
                        <div className="flex gap-5 px-3 py-3 mt-6 text-sm leading-5 text-gray-300 bg-white rounded-lg">
                          <div className="flex-auto my-auto">
                            Your email address
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82865be4f177a686d0b4b6ce0438bbdbe63df389242ee2cce629a5edab2f184a?"
                            className="shrink-0 aspect-square w-[18px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Footer;
