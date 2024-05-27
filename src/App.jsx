import { useState } from "react";
import "./App.css";
// import Sidebar from "./Components/Sidebar";
import OverView from "./Components/OverView";
import Chart from "./Components/Chart";
import BarChartComp from "./Components/BarChartComp";
import HeatMap from "./Components/HeatMap";

function App() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-12">
        <div className="col-span-2">{/* <Sidebar /> */}</div>
      </div>
      <div className="flex gap-4">
        <OverView />
        <BarChartComp />
      </div>

      <div className="flex gap-4 mt-4">
        <Chart />
        <HeatMap />
      </div>
    </>
  );
}

export default App;
