import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const reduceDataPoints = (data: number[], maxDataPoints: number) => {
  if (data.length <= maxDataPoints) return data;

  const step = Math.ceil(data.length / maxDataPoints);
  return data.filter((_, index) => index % step === 0);
};

const RevenueChart = ({
  className,
  isMobile,
}: {
  className?: string;
  isMobile?: boolean;
}) => {
  const categories = [
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
  ];
  const maxDataPoints = isMobile ? 20 : 50;

  const series = [
    {
      name: "Revenue",
      data: reduceDataPoints(
        [
          150000000, 250000000, 300000000, 350000000, 450000000, 500000000,
          700000000, 650000000, 800000000, 900000000, 950000000, 1000000000,
        ],
        maxDataPoints
      ),
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories,
      labels: {
        rotate: -45,
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => {
          if (val >= 1000000000) return (val / 1000000000).toFixed(1) + "b";
          if (val >= 1000000) return (val / 1000000).toFixed(1) + "m";
          return val.toFixed(0); // Removing trailing 00s
        },
      },
      min: 100000000,
      max: 1000000000,
    },
    stroke: {
      curve: "smooth",
      width: 4, // Thick line
      colors: ["#00E396"], // Green line color
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        type: "vertical",
        gradientToColors: ["#ABEBC6"], // Lighter green gradient fill
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    grid: {
      show: false, // Removing horizontal grid lines
    },
    markers: {
      size: 0, // No dot points
    },
    dataLabels: {
      enabled: false, // Hide values on top of points
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  return (
    <div className={twMerge("bg-white rounded-lg p-6 shadow-md", className)}>
      <ReactApexChart
        // @ts-expect-error - ApexChart expects a specific type of data
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default RevenueChart;
