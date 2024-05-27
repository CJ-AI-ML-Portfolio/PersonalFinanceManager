import React from "react";
import { render, fireEvent } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CategorizeExpense from "../CategorizeExpense";

const mockStore = configureStore([]);
let store;
const mock = new MockAdapter(axios);

describe("CategorizeExpense", () => {
  beforeEach(() => {
    store = mockStore({
      expenses: [],
    });
  });

  test("categorizes expense based on amount and description", async () => {
    mock
      .onGet("/api/categorize_expense/")
      .reply(200, { category: "Groceries" });

    const { getByLabelText, getByText, findByText } = render(
      <Provider store={store}>
        <CategorizeExpense />
      </Provider>
    );

    fireEvent.change(getByLabelText("Amount"), { target: { value: "100" } });
    fireEvent.change(getByLabelText("Description"), {
      target: { value: "Grocery shopping" },
    });
    fireEvent.click(getByText("Categorize Expense"));

    const category = await findByText("Predicted Category: Groceries");
    expect(category).toBeInTheDocument();
  });
});
