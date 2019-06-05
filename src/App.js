import React, {useState, useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl'

function App() {
  const [budget, setBudget] = useState(0);
  const [questionBudget, setQuestionBudget] = useState(true);

  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

  const [createExpense, setCreateExpense] = useState(false);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (createExpense) {
      const ExpensesList = [...expenses, expense];
      setExpenses(ExpensesList);
      const budgetRemaining = remaining - expense.budgetQuantity;
      setRemaining(budgetRemaining);
      setCreateExpense(false);
    }
  }, [createExpense, expense, expenses, remaining]);


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
              setRemaining={setRemaining}
              />
            : (
              <div className="row">
                <div className="one-half column">
                  <Form
                      setExpense={setExpense}
                      setCreateExpense={setCreateExpense}
                    />
                </div>
                <div className="one-half column">
                  <List
                      expenses={expenses}
                    />
                  <BudgetControl
                      budget={budget}
                      remaining={remaining}
                    />
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
