/* eslint-disable react/prop-types */
import { useState } from "react"
import { BarChart } from "./components/Bar"
import { LineGraph } from "./components/Line"
import { PieChart } from "./components/Pie"
import "./index.css"
import { RadarChart } from "./components/Radar"

function App() {
  const [modalOpen,setModalOpen] = useState(false)
  const [selectedChart,setSelectedChart] = useState(false)

  const openModal = (chartType)=>{
    setSelectedChart(chartType)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const renderChart = () => {
    switch(selectedChart){
      case 'line':
        return <LineGraph className="shadow-lg rounded-lg bg-white p-4" />;
      case 'bar':
        return <BarChart className="shadow-lg rounded-lg bg-white p-4" />;
      case 'pie':
        return <PieChart className="shadow-lg rounded-lg bg-white p-4" />;
      case 'radar':
        return <RadarChart className="shadow-lg rounded-lg bg-white p-4" />;
      default:
        return null
    }
  }
  return (
    <div className="p-5 flex flex-wrap">
      <div className="w-1/2 p-2" onClick={()=>openModal('line')}>
        <LineGraph className="shadow-lg rounded-lg bg-white p-4 border border-gray-300" />
      </div>
      <div className="w-1/2 p-2" onClick={()=>openModal('bar')}>
        <BarChart className="shadow-lg rounded-lg bg-white p-4 border border-gray-300" />
      </div>
      <div className="w-1/2 p-2" onClick={()=>openModal('pie')}> 
        <PieChart className="shadow-lg rounded-lg bg-white p-4 border border-gray-300" />
      </div>
      <div className="w-1/2 p-2" onClick={()=>openModal('radar')}> 
        <RadarChart className="shadow-lg rounded-lg bg-white p-4 border border-gray-300" />
      </div>
      <Modal show ={modalOpen} close={closeModal}>
        {renderChart()}
      </Modal>
    </div>
  );
}

export default App;


function Modal({children,show,close}) {
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${show ? 'block' : 'hidden'}`} onClick={close}>
      <div className="bg-white w-1/2 p-4 rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={stopPropagation}>
        <button onClick={close} className="absolute top-0 right-0 p-2 text-xl">&times;</button>
        {children}
      </div>
    </div>
  )
}