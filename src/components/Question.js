import React, { Fragment, useState } from 'react';
import Error from './Error'

const Question = (props) => {
  const { setBudget, setQuestionBudget, setRemaining } = props;
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const addBudget = e => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }
    setError(false)
    setBudget(quantity)
    setRemaining(quantity)
    setQuestionBudget(false)
  }

  return (
    <Fragment>
      <h2>Type your budget</h2>
      {error ? <Error message="Wrong Budget!"/> : null}
      <form
        onSubmit={addBudget}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Type your budget..."
          onChange={e => {setQuantity(parseInt(e.target.value, 10))}}
        />
        <input type="submit" className="button-primary u-full-width" value="Define Budget"/>
      </form>
    </Fragment>
  )
}

export default Question;
