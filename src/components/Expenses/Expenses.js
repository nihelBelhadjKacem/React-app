import Card from "../UI/Card";
import'./Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses=(props) =>{
  const  [filterYear, setFilteredYear]=useState('2020');

  const filterChangeHandler = (selectyear) => {
setFilteredYear(selectyear)  }
 const FiltredExpenses = props.items.filter(expense => {
 return expense.date.getFullYear().toString() === filterYear;
 });

      return (
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses = {FiltredExpenses}/>
       <ExpensesList expenses = {FiltredExpenses}/>
     
     </Card>
  );
}
export default Expenses;