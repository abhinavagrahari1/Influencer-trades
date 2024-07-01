import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography } from "@mui/material";

function Breakdown() {
  return (
    <section className="content-center p-5 bg-white rounded-xl border border-sky-100 border-solid flex flex-col flex-1 flex-wrap">
      <header className="self-center text-xl font-medium leading-8 text-black">
        Breakdown
      </header>
      <div className="self-center">
        <PieChart
          series={[
            {
              data: [{ value: 35, label:'Untriggered', color: '#43A046' }, { value: 35, label: 'Profit', color: '#263238' }, { value: 30 ,label: 'Loss',color: '#E53835' }],
              innerRadius: 30,
              outerRadius: 60,
              paddingAngle: 0,
              cornerRadius: 5,
              startAngle: -180,
              endAngle: 180,
              cx: 95,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              type: 'pie'
            },
          ]}
          width={200}
          height={270}
          slotProps={{
            legend: {
                
                  direction: 'row',
                  position: {
                    horizontal: 'middle',
                    vertical: 'bottom',
                  },
            }
          }}
        />
      </div>
    </section>
  );
}

export default Breakdown;
