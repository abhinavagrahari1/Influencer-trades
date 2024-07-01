import React from "react";
import Stat from "./Stat";


const ChannelCard = () => {
  return (
    <>
      <section className="flex flex-col mt-5 self-stretch p-4 rounded-xl border border-solid border-slate-300 w-full">
        <header className="flex gap-4 justify-between w-full text-lg max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 justify-center p-2.5 leading-7 text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/de5d715e068342672322aae522821ebfb59dc09d37155498ee815225bb106c26?apiKey=3daa1173557043d6a167c459539faf4e&"
              className="shrink-0 w-16 aspect-square"
              alt="Bulls vs Bears Logo"
            />
            <div className="my-auto">
              <span className="font-bold">Bulls vs Bears</span> <br /> 109K
              Subscribers
            </div>
          </div>
          <button className="justify-center px-4 py-2 my-auto text-white bg-green-600 rounded border border-green-500 border-solid leading-[156%]">
            View More
          </button>
        </header>

        <section className="p-4 mt-4 bg-white rounded-xl border border-solid border-slate-300 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:w-full">
              <Stat
                value="89,935"
                label="Subscribers"
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bd662873228f475b894019b067f212576c87550d6ea5feeef360b110e20a14dd?apiKey=3daa1173557043d6a167c459539faf4e&"
                altText="Subscriber icon"
              />
            </div>
            <div className="flex flex-col w-3/12 max-md:w-full">
              <Stat
                value="₹59,492.10"
                label="PNL - 6 Mos"
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e0cfd84167a8167799a98abf2c47c9912aa551839d1dff75db014250d23daad8?apiKey=3daa1173557043d6a167c459539faf4e&"
                altText="PNL icon"
              />
            </div>
            <div className="flex flex-col w-3/12 max-md:w-full">
              <Stat
                value="46,827"
                label="Num Trades"
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/162afdccb49f4f0af9f6d950851314b8146a1c05446b87d427c9a39eec566a5b?apiKey=3daa1173557043d6a167c459539faf4e&"
                altText="Trade icon"
              />
            </div>
            <div className="flex flex-col w-3/12 max-md:w-full">
              <Stat
                value="35%"
                label="Profitable Trades"
                imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7156a2837d170d6568f426dcaa75b00acfb150472828bf806b905a24a5ee3966?apiKey=3daa1173557043d6a167c459539faf4e&"
                altText="Profitable Trades icon"
              />
            </div>
          </div>
        </section>

        <footer className="flex gap-4 justify-between px-4 py-1.5 mt-4 w-full text-xs text-black rounded-xl max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto leading-[133%]">
            Tracking Since: Jan, 2022
          </div>
          <div className="flex gap-4 font-medium whitespace-nowrap leading-[167%]">
            <span className="justify-center px-2.5 py-1 bg-slate-300 rounded-[30px]">
              Futures
            </span>
            <span className="justify-center px-2.5 py-1 bg-slate-300 rounded-[30px]">
              Options
            </span>
          </div>
        </footer>
      </section>
    </>
  );
};

export default ChannelCard;
