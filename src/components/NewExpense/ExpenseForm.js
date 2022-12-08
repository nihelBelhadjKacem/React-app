import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredDate, setEntredDate] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  //   const [userInput, setUserInput] =useState({
  //   entredTitle,
  //   entredDate,
  //   entredAmount
  //  })

  const titleChangeHandler = (event) => {
    setEntredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     entredTitle:event.target.value,

    // });
    // setUserInput((prevState) => {
    //     return {...prevState,  entredTitle:event.target.value};
    // });
  };
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEntredAmount(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entredTitle,
      date: new Date(entredDate),
      amount: entredAmount,
    };
    props.onSaveExpense(expenseData);
    setEntredTitle("");
    setEntredDate("");
    setEntredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="Number"
            min="0.01"
            max="0.01"
            value={entredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
