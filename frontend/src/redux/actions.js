export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  payload: expense,
});

export const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  payload: id,
});
