import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  const expenses = useSelector((state) => state.expenses);
  const data = expenses.map((expense) => ({
    name: expense.date,
    amount: expense.amount,
  }));

  return (
    <div>
      <h2>Financial Dashboard</h2>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashboard;
