import React, { Fragment } from 'react';

const Question = () => {
  return (
    <Fragment>
      <h2>Type your budget</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Type your budget..."
          // onChange={}
        />
        <input type="submit" className="button-primary u-full-width" value="Define Budget"/>
      </form>
    </Fragment>
  )
}

export default Question;
