import { useState, useRef } from 'react'

export default function ExpenseForm( {onAddExpense} ) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const [category, setCategory] = useState('Food');
    const titleRef = useRef();  //for: cussor remains in title after form submit 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim() | !amount | !date){
            setError("All fields are Required");
            return;
        }
        if(isNaN(amount)){
            setError("Amount must be number");
            return;
        }
        if(Number(amount) <= 0){
            setError("Amount must be greater than 0");
            return;
        }

        setError("");

        {/* here key and value both same  title */}
        const newExpense = {
            id: Date.now(),
            title,                  
            amount: parseFloat(amount),
            date,
            category
        }  

        onAddExpense(newExpense);   //newExpense become parameter of addExpense function
        setAmount("");
        setTitle("");
        setCategory("Food");

        titleRef.current.focus(); 
    }

    return (
    <form   className="expense-form"    onSubmit={handleSubmit}>
            <div className="input-group">
                <label>Expense Title</label>
                <div className="input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Enter expense title" 
                        value={title} 
                        onChange={ 
                            (e) => {
                                setTitle(e.target.value);
                                setError("")
                            }
                        }
                        ref={titleRef}
                    />
                </div>
            </div>

            <div className="input-group">
                <label>Category</label>
                <div className="select-wrapper">
                    <svg className="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Bills">Bills</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <label>Amount</label>
                <div className="input-wrapper amount-wrapper">
                    <span className="currency-prefix">₹</span>
                    <input 
                        type="number" 
                        placeholder="0.00" 
                        value={amount}
                        onChange={ 
                            (e) => {
                                setAmount(e.target.value);
                                setError("")
                            }
                        }
                    />
                </div>
            </div>

            <div className="input-group">
                <label>Date</label>
                <div className="input-wrapper date-wrapper">
                    <input 
                        type="date"
                        placeholder='Select Date'
                        value={date}
                        onChange={
                            (e) => {
                                setDate(e.target.value);
                                setError("");
                            }
                        }
                     />
                </div>
            </div>
            
            <button type="submit" className="add-expense-btn">
                 <span className="btn-plus-icon">+</span> Add Expense
            </button>

            {error && (
                <p className="error">
                    {error}
                </p>
            )}
    </form>
  )
}

