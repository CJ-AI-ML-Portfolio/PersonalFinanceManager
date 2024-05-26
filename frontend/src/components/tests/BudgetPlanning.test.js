import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BudgetPlanning from "../BudgetPlanning";

const mockStore = configureStore([]);
let store;

describe("BudgetPlanning", () => {
  beforeEach(() => {
    store = mockStore({
      budgets: [],
    });
  });

  test("renders BudgetPlanning and adds budget", () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <BudgetPlanning />
      </Provider>
    );

    fireEvent.change(getByLabelText("Category"), {
      target: { value: "Entertainment" },
    });
    fireEvent.change(getByLabelText("Amount"), { target: { value: "300" } });
    fireEvent.click(getByText("Add Budget"));

    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: "ADD_BUDGET",
        payload: {
          id: expect.any(String),
          category: "Entertainment",
          amount: 300,
        },
      },
    ]);
  });
});
