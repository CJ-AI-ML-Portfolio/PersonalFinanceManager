import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import "./BudgetRecommendations.css";

const BudgetRecommendations = ({ userId }) => {
  const [budgets, setBudgets] = useState({});

  useEffect(() => {
    const fetchBudgets = async () => {
      const response = await axios.get("/api/recommend_budget/", {
        params: { user_id: userId },
      });
      setBudgets(response.data.budget_recommendations);
    };

    fetchBudgets();
  }, [userId]);

  return (
    <div className="budget-recommendations-container">
      <Typography variant="h5">Budget Recommendations</Typography>
      <List>
        {Object.entries(budgets).map(([category, amount]) => (
          <ListItem key={category}>
            <ListItemText
              primary={category}
              secondary={`Recommended Budget: $${amount.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BudgetRecommendations;
