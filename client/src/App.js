
import React from 'react';
import './App.css';
import BudgetApp from './component/BudgetApp';

function App() {

  return (
    <BudgetApp />
  );
}

export default App;


/*
import React from "react";
import Display from './Layout/Display'
import { NumberContext } from './Layout/NumberContext'

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={42}>
        <Display />
    </NumberContext.Provider>
  );
}
/*
function Display() {
  const value = React.useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}


export default App;
*/
