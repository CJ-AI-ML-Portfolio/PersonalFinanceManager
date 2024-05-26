import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@material-ui/core";
import "./Dashboard.css";

const Dashboard = () => {
  const expenses = useSelector((state) => state.expenses);

  // Prepare data for the charts
  const data = expenses.map((expense) => ({
    name: expense.date,
    amount: expense.amount,
  }));
  const categories = Array.from(
    new Set(expenses.map((expense) => expense.category))
  );
  const categorySpend = categories.map((category) => ({
    category,
    amount: expenses
      .filter((exp) => exp.category === category)
      .reduce((sum, exp) => sum + parseFloat(exp.amount), 0),
  }));

  // Colors for the pie chart
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF4444",
    "#AA47BC",
  ];

  return (
    <div className="dashboard-container">
      <Typography variant="h4" gutterBottom>
        Financial Dashboard
      </Typography>

      {/* Line Chart for Expenses Over Time */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Bar Chart for Category-wise Spend */}
      <Typography variant="h5" gutterBottom>
        Category-wise Spend
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={categorySpend}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      {/* Pie Chart for Category Distribution */}
      <Typography variant="h5" gutterBottom>
        Expense Categories Distribution
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={categorySpend}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {categorySpend.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
