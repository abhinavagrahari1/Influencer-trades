import React from "react";
import Sidebar from "../components/channel/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Graph from "../components/channel/Graph";
import Statistic from "../components/channel/Statistics";
import Trades from "../components/channel/Trades";
import BasicLineChart from "../components/channel/PNL";
import Breakdown from "../components/channel/Breakdown";

const Channel = () => {
  return (
    <Box>
      <Navbar />
      <div className="flex p-5">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="flex-1 w-4/5 pl-5">
          <div className="">
            <Graph />
          </div>
          <div className="flex flex-1">
            <div className=" w-3/4 pr-5">
              <BasicLineChart />
            </div>
            <div className="flex w-1/4">
              <Breakdown />
            </div>
          </div>
          <div className="flex-1 flex pt-5">
            <div className="w-1/3 mr-5">
            <Statistic statistics={statistics} />
            </div>
            
            <div className="flex-1 w-2/3">
              <Trades />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default Channel;

const statistics = [
  {
    title: "CAGR",
    description: "(Compound Annual Growth Rate)",
    value: "18.7%",
  },
  {
    title: "Max Drawdown",
    description: "(Maximum peak-to-trough decline)",
    value: "28.7%",
  },
  {
    title: "Average Trade Profit",
    description: "(Assuming ₹1L Investment)",
    value: "₹478",
  },
  {
    title: "Sharpe Ratio",
    description: "(Assuming 0% interest rate)",
    value: "5.1",
  },
  {
    title: "Trade Frequency",
    description: "(Average number of Trades in a Week)",
    value: "78",
  },
];
