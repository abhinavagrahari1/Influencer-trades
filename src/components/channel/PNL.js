import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  return (
    <section className="content-center p-5 bg-white rounded-xl border border-sky-100 border-solid w-[100%]">
      <header className="self-center text-xl font-medium leading-8 text-black">
        PNL Curve
      </header>
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          },
        ]}
        series={[
          {
            data: [23, 55, 22, 85, 15, 50],
            color: "#1F2253",
          },
        ]}
        width={800}
        height={300}
      />
    </section>
  );
}
