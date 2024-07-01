import React from "react";
import StatCard from "./StatCard";

const Statistic=(props)=> {
  return (
    <article className="flex flex-col p-5 bg-white rounded-xl border border-sky-100 border-solid">
      <header className="self-center text-xl font-medium leading-8 text-black">
        Statistics
      </header>
      {props.statistics.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          description={stat.description}
          value={stat.value}
        />
      ))}
    </article>
  );
}

export default Statistic;