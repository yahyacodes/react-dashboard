import React, { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Januanry",
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarChartComp = () => {
  return (
    <div className="bg-white p-4 rounded-md border" style={{ width: "70%" }}>
      <h4 className="text-sm font-medium border-b">Engagements</h4>
      <div className="flex gap-4 p-2">
        <p className="bg-blue-100 rounded-md border text-blue-900 text-xs py-1 px-3">
          Instagram
        </p>
        <p className=" rounded-md border text-gray-500 text-xs py-1 px-3">
          YouTube
        </p>
        <p className=" rounded-md border text-gray-500 text-xs py-1 px-3">
          Twitterr
        </p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={500} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComp;
