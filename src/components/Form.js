import React, {useState} from 'react';

const Form = (props) => {
  const [budgetName, setBudgetName] = useState('');
  const [budgetQuantity, setBudgetQuantity] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = e => {
    e.preventDefault();
    if (budgetQuantity < 1 || isNaN(budgetQuantity) || budgetName === '') {
      setError(true);
      return;
    }
    
  }

  return (
    <form
      onSubmit={addExpense}
    >
      <h2>Add your budgets here!</h2>
      <div className="field">
        <label>Budget Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="e.g Transport"
          onChange={e => {setBudgetName(e.target.value)}}
        />
        <label>Budget Quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="e.g 3000"
          onChange={e => {setBudgetQuantity(parseInt(e.target.value, 10))}}
        />
        <input type="submit" className="button-primary u-full-width" value="Add Budget"/>
      </div>
    </form>
  )
}

export default Form;
