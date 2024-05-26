import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FinancialReports from "../FinancialReports";

const mockStore = configureStore([]);
let store;

describe("FinancialReports", () => {
  beforeEach(() => {
    store = mockStore({
      expenses: [
        { id: "1", amount: "100", category: "Groceries", date: "2023-01-01" },
        { id: "2", amount: "50", category: "Transport", date: "2023-01-02" },
      ],
    });
  });

  test("renders FinancialReports and displays total and category-wise expenses", () => {
    const { getByText } = render(
      <Provider store={store}>
        <FinancialReports />
      </Provider>
    );

    expect(getByText(/Total Expenses: \$150\.00/i)).toBeInTheDocument();
    expect(getByText(/Groceries/i)).toBeInTheDocument();
    expect(getByText(/Transport/i)).toBeInTheDocument();
  });
});
