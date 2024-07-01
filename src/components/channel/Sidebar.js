import * as React from "react";

const ChannelInfo = (props) => {
  return (
    <section className="flex flex-col p-4 w-full text-xs leading-4 text-black rounded-xl bg-slate-100">
      <header className="flex flex-col justify-center w-full text-lg leading-7 bg-slate-100">
        <div className="flex gap-2.5 justify-center p-2.5">
          <img
            loading="lazy"
            src={props.imgUrl}
            alt={props.altText}
            className="shrink-0 w-16 aspect-square"
          />
          <div className="my-auto">
            <h2 className="text-xl font-semibold">{props.channelTitle}</h2>
            <p>{props.subscribers}</p>
          </div>
        </div>
      </header>
      <p className="justify-center px-4 mt-4 rounded-xl bg-slate-100">
        Tracking Since: {props.trackingDate}
      </p>
      <a
        href={props.channelLink}
        className="justify-center items-center px-4 mt-4 underline rounded-xl bg-slate-100"
      >
        Link to Channel
      </a>
    </section>
  );
};

const LikeReport = (props) => {
  return (
    <section className="flex flex-col justify-center p-4 mt-4 w-full text-lg leading-7 rounded-xl bg-slate-100">
      <p className="justify-center self-center p-2.5 text-black bg-slate-100">
        Like this report?
      </p>
      <button className="justify-center px-4 py-2 mt-4 text-white bg-green-600 rounded border border-green-500 border-solid">
        {props.buttonText}
      </button>
    </section>
  );
};


const Sidebar = () => {
  return (
    <div className="flex flex-col max-w-full">
      <ChannelInfo
        imgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/de5d715e068342672322aae522821ebfb59dc09d37155498ee815225bb106c26?apiKey=3daa1173557043d6a167c459539faf4e&"
        altText="Bulls vs Bears Channel Logo"
        channelTitle="Bulls vs Bears"
        subscribers="109K Subscribers"
        trackingDate="Jan, 2022"
        channelLink="#"
      />
      <LikeReport buttonText="Join our Community" />
    </div>
  );
};

export default Sidebar;
