import React from 'react';

const Expense = ({expense}) => {
  return (
    <li className="expense">
      <p>
      {expense.budgetName}
      <span className="expense">$ {expense.budgetQuantity}</span>
      </p>
    </li>
  )
}

export default Expense;
