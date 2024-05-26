import { addExpense, removeExpense, addBudget, removeBudget } from "../actions";
import { v4 as uuidv4 } from "uuid";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "1234"),
}));

describe("Redux Actions", () => {
  test("addExpense creates correct action", () => {
    const expense = {
      id: uuidv4(),
      amount: "100",
      category: "Groceries",
      date: new Date().toISOString(),
    };
    expect(addExpense(expense)).toEqual({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  });

  test("removeExpense creates correct action", () => {
    expect(removeExpense("1234")).toEqual({
      type: "REMOVE_EXPENSE",
      payload: "1234",
    });
  });

  test("addBudget creates correct action", () => {
    const budget = { id: uuidv4(), category: "Entertainment", amount: 300 };
    expect(addBudget(budget)).toEqual({
      type: "ADD_BUDGET",
      payload: budget,
    });
  });

  test("removeBudget creates correct action", () => {
    expect(removeBudget("1234")).toEqual({
      type: "REMOVE_BUDGET",
      payload: "1234",
    });
  });
});
