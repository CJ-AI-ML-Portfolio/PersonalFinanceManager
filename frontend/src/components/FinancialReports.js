import React from "react";
import { useSelector } from "react-redux";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import "./FinancialReports.css";

const FinancialReports = () => {
  const expenses = useSelector((state) => state.expenses);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );

  const getExpensesByCategory = () => {
    const categories = Array.from(new Set(expenses.map((exp) => exp.category)));
    return categories.map((category) => {
      const total = expenses
        .filter((expense) => expense.category === category)
        .reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
      return { category, total };
    });
  };

  const expensesByCategory = getExpensesByCategory();

  return (
    <div className="financial-reports-container">
      <Typography variant="h4" gutterBottom>
        Financial Reports
      </Typography>
      <Typography variant="h6">
        Total Expenses: ${totalExpenses.toFixed(2)}
      </Typography>

      <Typography variant="h6">Expenses by Category:</Typography>
      <List>
        {expensesByCategory.map((item) => (
          <ListItem key={item.category}>
            <ListItemText
              primary={item.category}
              secondary={`Total: $${item.total.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FinancialReports;
