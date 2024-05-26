export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  payload: expense,
});

export const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  payload: id,
});

// New actions for budgets
export const addBudget = (budget) => ({
  type: "ADD_BUDGET",
  payload: budget,
});

export const removeBudget = (id) => ({
  type: "REMOVE_BUDGET",
  payload: id,
});
