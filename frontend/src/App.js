import React from "react";
import { Container, Grid } from "@material-ui/core";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import BudgetPlanning from "./components/BudgetPlanning";
import FinancialReports from "./components/FinancialReports";
import "./App.css";

const App = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Dashboard />
        </Grid>
        <Grid item xs={6}>
          <ExpenseForm />
        </Grid>
        <Grid item xs={6}>
          <BudgetPlanning />
        </Grid>
        <Grid item xs={12}>
          <FinancialReports />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
