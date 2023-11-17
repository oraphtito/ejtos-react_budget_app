import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currencyName } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    console.log(newBudget);
    if (newBudget > 20000) {
        alert("Entered budget cannot be above £20,000")
    }
    if (newBudget < 1660) {
        alert("Budget cannot be lower then spending")
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currencyName} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max="20000"></input>
        </div>
    );
};
export default Budget;


