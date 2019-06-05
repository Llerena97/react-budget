import React from 'react';
import Expense from './Expense';

const List = ({expenses}) => {
  return (
    <div className="executed-expenses">
      <h2>List</h2>
      {expenses.map(expense => (
        <Expense
          expense={expense}
          key={expense.id}
        />
      ))}
    </div>
  )
}

export default List;
