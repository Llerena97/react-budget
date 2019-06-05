import React, {useState} from 'react';
import Error from './Error'
import shortid from 'shortid'

const Form = (props) => {
  const {setExpense} = props;
  const [budgetName, setBudgetName] = useState('');
  const [budgetQuantity, setBudgetQuantity] = useState('');
  const [error, setError] = useState(false);

  const addExpense = e => {
    e.preventDefault();
    if (budgetQuantity < 1 || isNaN(budgetQuantity) || budgetName === '') {
      setError(true);
      return;
    }
    const expense = {
      budgetName,
      budgetQuantity,
      id: shortid.generate()
    }
    setExpense(expense);
    setError(false);
    setBudgetName('');
    setBudgetQuantity('');

  }

  return (
    <form
      onSubmit={addExpense}
    >
      <h2>Add your budgets here!</h2>
      {error ? <Error message="Both fields are required or wrong budget!"/> : null}
      <div className="field">
        <label>Budget Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="e.g Transport"
          onChange={e => {setBudgetName(e.target.value)}}
          value={budgetName}
        />
        <label>Budget Quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="e.g 3000"
          onChange={e => {setBudgetQuantity(parseInt(e.target.value, 10))}}
          value={budgetQuantity}
        />
        <input type="submit" className="button-primary u-full-width" value="Add Budget"/>
      </div>
    </form>
  )
}

export default Form;
