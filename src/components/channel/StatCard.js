import React from "react";

const StatCard = (props) => {
  return (
    <>
      <section className="flex flex-col justify-center mt-3 w-full bg-white rounded border border-gray-200 border-solid">
        <div className="flex gap-5 justify-between px-2 bg-white shadow-sm">
          <div className="flex flex-col justify-center">
            <h2 className="text-base font-semibold leading-6 text-gray-800">
              {props.title}
            </h2>
            <p className="text-sm leading-5 text-stone-950">
              {props.description}
            </p>
          </div>
          <p className="my-auto text-base font-semibold leading-6 text-gray-800">
            {props.value}
          </p>
        </div>
      </section>
    </>
  );
};

export default StatCard;