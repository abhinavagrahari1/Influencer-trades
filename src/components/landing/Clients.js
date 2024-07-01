import * as React from "react";

const ClientCard = (props) => {
  return (
    <>
      <div
        key={props.index}
        className="flex flex-col items-center w-1/7 px-1 md:w-1/8 lg:w-1/8"
      >
        <img
          loading="lazy"
          src={props.banner}
          className="self-center w-16 aspect-[1.05]"
        />
        <div className="mt-1.5 text-center">
          <span className="text-xs">{props.name}</span>
          <br />
          {props.subscribersCount}
        </div>
      </div>
    </>
  );
};

const Clients = (props) => {
  return (
    <div className="flex justify-center items-center px-16 py-6 w-full text-xs leading-3 text-center text-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-6xl max-md:max-w-full">
        <div className="mx-5 text-4xl font-semibold leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
          Most Subscribed Channels
        </div>
        <div className="flex flex-wrap justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          {props.clientsData.map((e, index) => {
            return (
              <ClientCard
                index={index}
                name={e.name}
                subscribersCount={e.subscribersCount}
                banner={e.banner}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
