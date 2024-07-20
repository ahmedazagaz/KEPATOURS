import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import "../styles/BudgetTravel.css";
import financeImage from '../assets/images/finance.jpg';

const BudgetTravel = () => {
  const [budget, setBudget] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [error, setError] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [dailyBudget, setDailyBudget] = useState('');
  const [selectedExpense, setSelectedExpense] = useState('');

  const commonExpenses = [
    { title: 'Accommodation', amount: 500 },
    { title: 'Food', amount: 300 },
    { title: 'Transportation', amount: 200 },
    { title: 'Sightseeing tours', amount: 100 },
    { title: 'Memories', amount: 50 }
  ];

  const handleBudgetChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setBudget(value);
      setError('');
    } else {
      setError('Veuillez entrer un budget valide.');
    }
  };

  const handleNumberOfDaysChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setNumberOfDays(value);
      const dailyBudgetValue = budget / value;
      setDailyBudget(dailyBudgetValue);
      setError('');
    } else {
      setError('Veuillez entrer un nombre de jours valide.');
    }
  };

  const handleSelectedExpenseChange = (e) => {
    setSelectedExpense(e.target.value);
    const selectedExpenseObject = commonExpenses.find(expense => expense.title === e.target.value);
    if (selectedExpenseObject) {
      setExpenseTitle(selectedExpenseObject.title);
      setExpenseAmount(selectedExpenseObject.amount);
    } else if (e.target.value === 'Other') {
      setExpenseTitle('');
      setExpenseAmount('');
    }
  };

  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(Number(e.target.value));
  };

  const handleAddExpense = () => {
    if (expenseTitle && expenseAmount > 0) {
      setExpenses([...expenses, { title: expenseTitle, amount: expenseAmount }]);
      setExpenseTitle('');
      setExpenseAmount('');
      setError('');
      setSelectedExpense(''); // Reset selected expense
    } else {
      setError('Veuillez entrer un titre et un montant de dépense valides.');
    }
  };

  const handleSaveAsPDF = () => {
    const element = document.getElementById('budget-tracker-container');
    html2pdf()
      .from(element)
      .save();
  };

  const handleVisitLindyAI = () => {
    window.open("https://chat.lindy.ai/lindies", "_blank"); 
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const balance = budget - totalExpenses;

  return (
    <div id="budget-tracker-container" className="budget-tracker-container arial-font">
      <h1 className="centered-heading">Plan your travel budget</h1>
      <img src={financeImage} alt="Finance" className="finance-image" />
      <br></br>
      <div className="input-group">
        <label>Your budget for Morocco (in dirhams)</label>
        <input
          type="number"
          placeholder="Enter your budget"
          value={budget}
          onChange={handleBudgetChange}
          className="input-number"
        />
        {error && <div className="error">{error}</div>}
      </div>

      <div className="input-group">
        <label>Number of days</label>
        <input
          type="number"
          placeholder="Enter Number of days"
          value={numberOfDays}
          onChange={handleNumberOfDaysChange}
          className="input-number"
        />
        {error && <div className="error">{error}</div>}
      </div>

      {budget !== '' && numberOfDays !== '' && (
        <div className="input-group">
          <label>Select a current expense</label>
          <select
            value={selectedExpense}
            onChange={handleSelectedExpenseChange}
            className="select"
          >
            <option value="">Select an expense</option>
            {commonExpenses.map((expense, index) => (
              <option key={index} value={expense.title}>{expense.title}</option>
            ))}
            <option value="Autre">Autre</option>
          </select>

          {selectedExpense && (
            <div className="custom-expense">
              {selectedExpense === "Autre" ? (
                <input
                  type="text"
                  placeholder="Titre de la dépense"
                  value={expenseTitle}
                  onChange={(e) => setExpenseTitle(e.target.value)}
                  className="input-text"
                />
              ) : (
                <input
                  type="text"
                  placeholder="Titre de la dépense"
                  value={expenseTitle}
                  readOnly
                  className="input-text"
                />
              )}
              <input
                type="number"
                placeholder="Montant"
                value={expenseAmount}
                onChange={handleExpenseAmountChange}
                className="input-number"
              />
              <button onClick={handleAddExpense} className="add-expense-button">Add an expense</button>
            </div>
          )}
        </div>
      )}

      {budget !== '' && numberOfDays !== '' && (
        <div className="budget-info">
          <h3 className="centered-heading">Information about your budget</h3>
          <br></br>
          <div><strong>Budget :</strong> {budget.toLocaleString()} MAD</div>
          <div><strong>Total expenses :</strong> {totalExpenses.toLocaleString()} MAD</div>
          <div><strong>Pay:</strong> {balance.toLocaleString()} MAD</div>
          <div><strong>Daily budget :</strong> {dailyBudget.toLocaleString()} MAD</div>

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Rising</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.title}</td>
                  <td>{expense.amount.toLocaleString()} MAD</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button onClick={handleSaveAsPDF} className="save-pdf-button">Download as PDF</button>
      <button onClick={handleVisitLindyAI} className="visit-lindy-button">Access Lindy.ai</button>
    </div>
  );
};

export default BudgetTravel;
