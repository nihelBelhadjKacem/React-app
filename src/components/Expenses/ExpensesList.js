import ExpenseItem from "./ExpenseItem";
import'./ExpensesList.css';
const ExpensesList =props => {
    // let expensseContent = <p>No expenses found.</p>;
    if(props.expenses.length === 0 ){
     return <h2 className="expenses-list__fallback ">Found no expenses</h2>
    }
    return (<ul className="expenses-list">{props.expenses.map( (expense) => (<ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />))}</ul>)
   
};
export default ExpensesList;