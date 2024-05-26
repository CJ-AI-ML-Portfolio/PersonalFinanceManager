import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addBudget, removeBudget } from "../redux/actions";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./BudgetPlanning.css";

const BudgetPlanning = () => {
  const dispatch = useDispatch();
  const budgets = useSelector((state) => state.budgets);

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddBudget = () => {
    dispatch(addBudget({ id: uuidv4(), category, amount: parseFloat(amount) }));
    setCategory("");
    setAmount("");
  };

  const handleRemoveBudget = (id) => {
    dispatch(removeBudget(id));
  };

  return (
    <div className="budget-planning-container">
      <h2>Budget Planning</h2>
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        variant="outlined"
        className="budget-input"
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        variant="outlined"
        className="budget-input"
      />
      <Button
        onClick={handleAddBudget}
        variant="contained"
        color="primary"
        className="add-budget-button"
      >
        Add Budget
      </Button>

      <List>
        {budgets.map((budget) => (
          <ListItem key={budget.id}>
            <ListItemText
              primary={budget.category}
              secondary={`Budget: $${budget.amount}`}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleRemoveBudget(budget.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BudgetPlanning;
