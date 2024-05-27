import React from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BudgetRecommendations from "../BudgetRecommendations";

const mockStore = configureStore([]);
let store;
const mock = new MockAdapter(axios);

describe("BudgetRecommendations", () => {
  beforeEach(() => {
    store = mockStore({
      budgets: [],
    });
  });

  test("fetches and displays budget recommendations", async () => {
    mock.onGet("/api/recommend_budget/").reply(200, {
      budget_recommendations: {
        Groceries: 150,
        Transport: 50,
      },
    });

    const { findByText } = render(
      <Provider store={store}>
        <BudgetRecommendations userId={1} />
      </Provider>
    );

    expect(await findByText("Recommended Budget: $150.00")).toBeInTheDocument();
    expect(await findByText("Recommended Budget: $50.00")).toBeInTheDocument();
  });
});
