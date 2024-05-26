import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Dashboard from "../Dashboard";

const mockStore = configureStore([]);
let store;

describe("Dashboard", () => {
  beforeEach(() => {
    store = mockStore({
      expenses: [
        { id: "1", amount: "100", category: "Groceries", date: "2023-01-01" },
        { id: "2", amount: "50", category: "Transport", date: "2023-01-02" },
      ],
    });
  });

  test("renders Dashboard with charts", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(getByText(/Financial Dashboard/i)).toBeInTheDocument();
    expect(getByText(/Category-wise Spend/i)).toBeInTheDocument();
    expect(getByText(/Expense Categories Distribution/i)).toBeInTheDocument();
  });
});
