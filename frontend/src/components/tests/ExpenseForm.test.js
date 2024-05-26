import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ExpenseForm from "../ExpenseForm";

const mockStore = configureStore([]);
let store;

describe("ExpenseForm", () => {
  beforeEach(() => {
    store = mockStore({
      expenses: [],
    });
  });

  test("renders ExpenseForm and adds expense", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <ExpenseForm />
      </Provider>
    );

    fireEvent.change(getByPlaceholderText("Amount"), {
      target: { value: "100" },
    });
    fireEvent.change(getByPlaceholderText("Category"), {
      target: { value: "Groceries" },
    });
    fireEvent.click(getByText("Add Expense"));

    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: "ADD_EXPENSE",
        payload: {
          id: expect.any(String),
          amount: "100",
          category: "Groceries",
          date: expect.any(String),
        },
      },
    ]);
  });
});
