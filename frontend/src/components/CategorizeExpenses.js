import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography } from "@material-ui/core";
import "./CategorizeExpense.css";

const CategorizeExpense = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleCategorize = async () => {
    const response = await axios.get("/api/categorize_expense/", {
      params: { amount, description },
    });
    setCategory(response.data.category);
  };

  return (
    <div className="categorize-container">
      <Typography variant="h5">Categorize Expense</Typography>
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="categorize-input"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="categorize-input"
      />
      <Button onClick={handleCategorize} variant="contained" color="primary">
        Categorize Expense
      </Button>
      {category && (
        <Typography variant="h6" className="categorize-result">
          Predicted Category: {category}
        </Typography>
      )}
    </div>
  );
};

export default CategorizeExpense;
