import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) =>{
    const onSaveExpense= (entredExpenseD) =>{
       const entredData = {
        ...entredExpenseD,
        id: Math.random().toString
       };
       props.onAddd(entredData);
    };
return <div className="new-expense">
    <ExpenseForm onSaveExpense= {onSaveExpense}/> {/*should be a fonction·*/}
</div>
};
export default NewExpense;