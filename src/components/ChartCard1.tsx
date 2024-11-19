import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartCard1() {
  const [chartSize, setChartSize] = useState({ width: 600, height: 400 });
  const chartRef = useRef<ChartJS<"line", number[], string> | null>(null);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 500) {
      setChartSize({ width: 300, height: 200 });
    } else if (screenWidth <= 600) {
      setChartSize({ width: 400, height: 300 });
    } else if (screenWidth <= 1300) {
      setChartSize({ width: 500, height: 400 });
    } else  {
      setChartSize({ width: 600, height: 400 });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        data: [1200, 2300, 4000, 1000, 5000, 6000, 700, 6400, 12000],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Responsive Line Chart",
      },
    },
  };

  return (
    <div
      style={{
        width: chartSize.width,
        height: chartSize.height,
        marginLeft: "10px",
      }}
    >
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
}

export default ChartCard1;