
import ExpenseItem from "./ExpenseItem"

function ExpenseList(  {expenses, onDelete}) {
    if(expenses.length === 0){
        return <p className='no-expense'>No Expenses yet.</p>
        /* if true --> transfer not go to return*/    
    }
    
    return (

    <div className="expense-list">
        {expenses.map ((item) => (
            <ExpenseItem key={item.id} item={item} onDelete={onDelete}/>          
        )) }  

        {/*  {onDelete} is function receive from above  and onDelete= is another props  */}
    </div>
  )
}

export default ExpenseList