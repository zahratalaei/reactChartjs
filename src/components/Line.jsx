import { Line } from "react-chartjs-2"
import {Chart as ChartJS, CategoryScale, LinearScale,PointElement, LineElement,Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
export const LineGraph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65, 34],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76, 34],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
      },
    ],
  }
  const options = {
   responsive: true,
   plugins:{
    title: {
      display: true,
      text: "Chart.js Line Chart",
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
          text: "Month",
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
   }
    
  }
  return (

    <Line options={options} data={data}/>
  )
}
