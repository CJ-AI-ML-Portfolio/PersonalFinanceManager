import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addExpense } from "../redux/actions";

const ExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      amount,
      category,
      date: new Date().toISOString(),
    };
    dispatch(addExpense(expense));
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
