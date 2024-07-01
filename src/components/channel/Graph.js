import * as React from "react";

const StatCard = (props) => {
  return (
    <>
      <section className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-5 justify-between max-md:mt-10">
          <article className="flex flex-col text-black leading-[150%]">
            <h2 className="text-3xl font-semibold">{props.value}</h2>
            <p className="mt-4 text-base">{props.title}</p>
          </article>
          <div
            className="flex justify-center items-center self-start p-2.5 w-11 h-11 bg-white rounded-xl shadow-sm"
            role="img"
            tabIndex={0}
          >
            <img
              loading="lazy"
              src={props.imgSrc}
              alt={props.altText}
              className="w-6 aspect-square"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const Graph = () => {
  return (
    <div className="self-stretch p-4 mb-5 bg-white rounded-xl border border-solid border-slate-300">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            imgSrc={stat.imgSrc}
            altText={stat.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Graph;

const stats = [
  {
    title: "PNL",
    value: "₹59,492.10",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6973b0fb91a372e7740137e905bc493930d8eff6cf2c326167622d2973c8c70f?apiKey=3daa1173557043d6a167c459539faf4e&",
    altText: "PNL icon",
  },
  {
    title: "Maximum Drawdown",
    value: "₹9,492.10",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/60737752c0aca6c6c8c5d88479074ee148772f47cdfe9bf134dffacc02cbe492?apiKey=3daa1173557043d6a167c459539faf4e&",
    altText: "Max Drawdown icon",
  },
  {
    title: "Total Trades - Last 6 Months",
    value: "46,827",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d4b219752b8f8f6dcec030dfae8057299d63618c25cfc23f1794dba6e33402bb?apiKey=3daa1173557043d6a167c459539faf4e&",
    altText: "Total Trades icon",
  },
  {
    title: "Winning Trades",
    value: "35%",
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd074e7323729e4ce65ce5161bbd72e337ebfdefe21d098879bf14a9914c2226?apiKey=3daa1173557043d6a167c459539faf4e&",
    altText: "Winning Trades icon",
  },
];
