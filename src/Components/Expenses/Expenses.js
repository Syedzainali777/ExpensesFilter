import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import "./Expense.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filterInfoText, setFilterInfoText] = useState("2019, 2021, 2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === "2019") {
      setFilterInfoText("2020, 2021, 2022");
    } else if (selectedYear === "2020") {
      setFilterInfoText("2019, 2021, 2022");
    } else if (selectedYear === "2021") {
      setFilterInfoText("2019, 2020, 2022");
    } else {
      setFilterInfoText("2019, 2020, 2021");
    }
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for the years {filterInfoText} is hidden</p>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id} // Adding key prop with a unique identifier
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
