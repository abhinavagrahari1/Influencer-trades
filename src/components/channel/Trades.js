import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Date", width: 120 },
  {
    field: "asset",
    headerName: "Asset",
    width: 120,
  },
  {
    field: "side",
    headerName: "Side",
    width: 90,
  },
  {
    field: "entryTime",
    headerName: "Entry Time",
    width: 120,
  },
  {
    field: "exitTime",
    headerName: "Exit Time",
    width: 120,
  },
  {
    field: "result",
    headerName: "Result",
    width: 120,
  },
];

const trades = [
  {
    id: 1,
    date: "2 Jan, 2024",
    asset: "HDFC",
    side: "Sell",
    entryTime: "14:20",
    exitTime: "15:10",
    result: "₹478",
  },
  {
    id: 2,
    date: "2 Jan, 2024",
    asset: "HDFC",
    side: "Buy",
    entryTime: "14:20",
    exitTime: "15:10",
    result: "₹-478",
  },
  {
    id: 3,
    date: "2 Jan, 2024",
    asset: "HDFC",
    side: "Buy",
    entryTime: "14:20",
    exitTime: "15:10",
    result: "₹-700",
  },
  {
    id: 4,
    date: "2 Jan, 2024",
    asset: "HDFC",
    side: "Sell",
    entryTime: "14:20",
    exitTime: "15:10",
    result: "₹-850",
  },
];

const Trades = () => {
  return (
    <section className="flex flex-col flex-wrap content-center p-5 bg-white rounded-xl border border-sky-100 border-solid leading-[150%] w-[100%]">
      <header className="self-center text-xl font-medium text-black">
        Recent Trades
      </header>
      <div className="mt-3 text-base text-gray-800 max-md:flex-wrap max-md:max-w-full w-[100%] flex-1">
        <DataGrid
          rows={trades}
          columns={columns}
          disableRowSelectionOnClick
          hideFooterPagination
        />
      </div>
    </section>
  );
};

export default Trades;
