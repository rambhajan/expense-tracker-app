import React, { useState } from "react";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "el",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 6, 13),
  },
  {
    id: "e2",
    title: "Freez",
    amount: 2594.12,
    date: new Date(2021, 6, 23),
  },
  {
    id: "e3",
    title: "New Tv",
    amount: 954.12,
    date: new Date(2021, 6, 25),
  },
  {
    id: "e4",
    title: "Laptop",
    amount: 95454.12,
    date: new Date(2021, 12, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h1>EXPENSE TRACKER</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};
export default App;
