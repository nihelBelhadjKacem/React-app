import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import'./Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

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
       {FiltredExpenses.map( (expense) => (<ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />))}
     
     </Card>
  );
}
export default Expenses;