import { useState, useEffect } from 'react'

import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
 
import './App.css'

function App() {

  {/* empty array only when there is no data in local storage */}
  const [expenses, Setexpenses] = useState( () => {
      const saved = localStorage.getItem("expenses")
      return saved ? JSON.parse(saved) : []
  } );      

  useEffect( () => {
    localStorage.setItem("expenses", JSON.stringify(expenses));     {/* here expenses is key not state variable */}
  }, [expenses]); 

  const addExpense = (expense) => {
    Setexpenses((prev) => [...prev, expense])
  }

  const deleteExpenses = (id) => {
    Setexpenses( (prev) => prev.filter( (item) => item.id != id ) );  {/* expenses new array of list */}
  }

  const totalExpenses = expenses.reduce( (sum, item) => sum + item.amount, 0 );

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Expense Tracker</h1>
        <p className="subtitle">Track, organize and manage your daily expenses effortlessly.</p>
      </div>

      <div className="form-card">
        <ExpenseForm onAddExpense={addExpense}/>  {/* onAddExpense is props */}
      </div>

      <div className="list-card">
        <div className="list-header">
          <h2>Recent Expenses</h2>
          <h3 className="total">Total Expense: <span className="total-amount">₹{totalExpenses.toFixed(2)}</span></h3>
        </div>
        
        <ExpenseList  expenses = {expenses}   onDelete={deleteExpenses}/>
      </div>
    </div>
  )
}

export default App

