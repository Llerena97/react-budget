import React, {useState} from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {
  const [budget, setBudget] = useState(0);
  const [questionBudget, setQuestionBudget] = useState(true);

  return (
    <div className="App container">
      <header>
        <h1>React Budget</h1>
        <h4>Weekly Expense</h4>
        <div className="main-content content">
          { questionBudget ?
            <Question
              setBudget={setBudget}
              setQuestionBudget={setQuestionBudget}
              />
            : (
              <div className="row">
                <div className="one-half column">
                  <Form
                      
                    />
                </div>
                <div className="one-half column">
                </div>
              </div>
            )
          }
        </div>
      </header>

    </div>
  );
}

export default App;
