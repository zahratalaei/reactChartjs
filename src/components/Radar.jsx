import { Radar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register components needed for Radar chart
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
export const RadarChart = ({className}) => {
    const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Radar Chart",
      },
      legend: {
        display: true,
        position: "bottom",
      },
      scale: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
}

const data = {
  labels: [
    "grocery",
    "rent",
    "bills",
    "entertainment",
    "clothing",
    "transport",
    "food",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(205, 143, 238, 0.2)",
      borderColor: "rgb(183, 40, 181)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(42, 161, 68, 0.258)",
      borderColor: "rgb(30, 60, 46)",
      pointBackgroundColor: "rgb(19, 69, 18)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};
  return (
    <div className={`${className} hover:bg-blue-100 md:w-3/4`}>
      <Radar options={options} data={data} />
    </div>
  );
}
