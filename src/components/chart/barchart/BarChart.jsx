import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./barchart.scss";

const data = [
  {
    name: "2015",
    cost: 4000,
    profit: 2400,
    amt: 2400,
  },
  {
    name: "2016",
    cost: 3000,
    profit: 1398,
    amt: 2210,
  },
  {
    name: "2017",
    cost: 2000,
    profit: 9800,
    amt: 2290,
  },
  {
    name: "2018",
    cost: 2780,
    profit: 3908,
    amt: 2000,
  },
  {
    name: "2019",
    cost: 1890,
    profit: 4800,
    amt: 2181,
  },
  {
    name: "2020",
    cost: 2390,
    profit: 3800,
    amt: 2500,
  },
  {
    name: "2021",
    cost: 3490,
    profit: 4300,
    amt: 2100,
  },
];

const BarChartCard = () => {
  return (
    <div className="sales-bar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="profit" fill="#8884d8" />
          <Bar dataKey="cost" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCard;
