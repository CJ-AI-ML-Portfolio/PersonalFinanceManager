import { expenseReducer } from "../reducers";

describe("Redux Reducers", () => {
  const initialState = {
    expenses: [],
    budgets: [],
  };

  test("adds expense correctly", () => {
    const action = {
      type: "ADD_EXPENSE",
      payload: {
        id: "1",
        amount: "100",
        category: "Groceries",
        date: "2023-01-01",
      },
    };
    const newState = expenseReducer(initialState, action);
    expect(newState.expenses).toHaveLength(1);
    expect(newState.expenses[0]).toEqual(action.payload);
  });

  test("removes expense correctly", () => {
    const stateWithExpense = {
      ...initialState,
      expenses: [
        { id: "1", amount: "100", category: "Groceries", date: "2023-01-01" },
      ],
    };
    const action = {
      type: "REMOVE_EXPENSE",
      payload: "1",
    };
    const newState = expenseReducer(stateWithExpense, action);
    expect(newState.expenses).toHaveLength(0);
  });

  test("adds budget correctly", () => {
    const action = {
      type: "ADD_BUDGET",
      payload: { id: "1", category: "Entertainment", amount: 300 },
    };
    const newState = expenseReducer(initialState, action);
    expect(newState.budgets).toHaveLength(1);
    expect(newState.budgets[0]).toEqual(action.payload);
  });

  test("removes budget correctly", () => {
    const stateWithBudget = {
      ...initialState,
      budgets: [{ id: "1", category: "Entertainment", amount: 300 }],
    };
    const action = {
      type: "REMOVE_BUDGET",
      payload: "1",
    };
    const newState = expenseReducer(stateWithBudget, action);
    expect(newState.budgets).toHaveLength(0);
  });
});
