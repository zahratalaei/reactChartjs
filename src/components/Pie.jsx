import { Pie } from "react-chartjs-2"
import {Chart as ChartJs,ArcElement,Tooltip,Legend} from 'chart.js'
ChartJs.register(ArcElement,Tooltip,Legend)
export const PieChart = ({className}) => {
    const data = {
    labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'Pinterest'],
    datasets: [
      {
        label: 'Social Media',
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderWidth: 1,
        onoffline: 1,
        hoverOffset: 4
      },
    ],
    
    }

    const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Social Media Users'
      }
    }}

  return (
    <div className={`${className} hover:bg-blue-100 md:w-3/4`}>
      <Pie options={options} data={data} />
    </div>
  );
}
