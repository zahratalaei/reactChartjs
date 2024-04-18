import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale,BarElement, Title, Tooltip, Legend } from "chart.js"
ChartJS.register(CategoryScale, LinearScale,BarElement, Title, Tooltip, Legend)

export const BarChart = () => {
    const data = {
    labels: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65, 34],
        fill: false,
        backgroundColor: ["rgb(75, 192, 192)", "rgb(184, 54, 235)", "rgb(255, 205, 86)", "rgb(201, 203, 207)", "rgb(255, 99, 132)", "rgb(125, 228, 180)", "rgb(105, 54, 235)"],
        tension: 0.1,
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76, 34],
        fill: false,
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 90, 244)", "rgb(244, 244, 75)", "rgb(96, 78, 82)", "rgb(183, 112, 136)", "rgb(44, 101, 26)", "rgb(155, 154, 205)"],
        tension: 0.1,
      },
    ],
}
const options = {
    responsive: true,
    plugins:{
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
        legend: {
            display: true,
            position: "bottom",
        },
        scale: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Day",
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Value",
                },
            },
        },
    }}
  return (
    <Bar options={options} data={data} />
  )
}
