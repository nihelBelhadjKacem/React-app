import React , {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) =>{
    const onSaveExpense= (entredExpenseD) =>{
       const entredData = {
        ...entredExpenseD,
        id: Math.random().toString()
       };
       props.onAddd(entredData);
       setIsEditing(false);
    };
   const [isEditing, setIsEditing]= useState(false);

   const startEditing = ()=>
   {
    setIsEditing(true);   }


    const stopediting = ()=> {
       setIsEditing(false);
    }
return <div className="new-expense">
    {!isEditing &&(
    <button onClick={startEditing}> Add New Expense</button>)}
     {isEditing  &&( <ExpenseForm onSaveExpense= {onSaveExpense} onCancel={stopediting}/>)}
</div>
};
export default NewExpense;