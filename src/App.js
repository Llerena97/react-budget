import React, {useState} from 'react';
import Question from './components/Question';

function App() {
  const [budget, setBudget] = useState(0);

  return (
    <div className="App container">
      <header>
        <h1>React Budget</h1>
        <h4>Weekly Expense</h4>
        <div className="main-content content">
          <Question
            setBudget={setBudget}
            />
        </div>
      </header>

    </div>
  );
}

export default App;
