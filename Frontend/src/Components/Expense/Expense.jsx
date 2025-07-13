import React, { useState } from 'react';
import axios from 'axios';
import Charts from '../Charts/Charts';
import './Expense.css';

const Expense = ({ onNewExpense }) => {
  const [expenses, setExpenses] = useState([]);
  const [limit, setLimit] = useState(5000);
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/expense', {
        amount,
        description,
      });

      setExpenses([...expenses, res.data]);
      if (onNewExpense) onNewExpense(res.data); // Optional callback
      setAmount('');
      setDescription('');
    } catch (err) {
      console.error('Error submitting expense:', err);
    }
  };

  return (
    <div className="expense">
        <h1>AI Expense Tracker</h1>
        <br></br>
      <form onSubmit={handleSubmit} className='form-row'>
        <h2><b>Please set your monthly budget:</b></h2>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          placeholder="Set your monthly budget" className='box'
        />
        <br></br><br></br>

        <h2><b>Please enter amount:</b></h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required        className='box'
        />
        <br></br><br></br>

        <h2><b>Please enter description:</b></h2>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required    className='box'  style={{ width: "500px" }}
        />
        <br></br><br></br>
        <button className='button' type="submit">Add Expense</button>
      </form>

      <div>
        
        {/* <p>Total: ₹{total} / ₹{limit}</p>
        {total > limit && (
          <p style={{ color: 'red' }}>Budget limit exceeded!</p>
        )} */}
        <Charts data={expenses} />
      </div>
    </div>
  );
};

export default Expense;

