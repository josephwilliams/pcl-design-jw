import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [series] = useState([
    {
      name: "Revenue",
      data: [
        150000000, 250000000, 300000000, 350000000, 450000000, 500000000,
        700000000, 650000000, 800000000, 900000000, 950000000, 1000000000,
      ],
    },
  ]);

  const options = {
    chart: {
      type: "line",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#00E396"], // Adjust the line color to make it pop
      dashArray: 0,
      shadow: {
        enabled: true,
        color: "#00E396",
        top: 10,
        left: 0,
        blur: 10,
        opacity: 0.8,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#00E396"], // Match with the line color
        stops: [0, 100],
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        formatter: (value: number) => {
          if (value >= 1000000000) return (value / 1000000000).toFixed(1) + "b";
          if (value >= 1000000) return (value / 1000000).toFixed(1) + "m";
          return value;
        },
      },
      min: 100000000,
      max: 1000000000,
    },
    tooltip: {
      y: {
        formatter: (value: number) => {
          if (value >= 1000000000) return (value / 1000000000).toFixed(1) + "b";
          if (value >= 1000000) return (value / 1000000).toFixed(1) + "m";
          return value;
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
