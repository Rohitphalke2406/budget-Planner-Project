import React, { useContext } from 'react';
import { BudgetContext } from '../App';

const BudgetSetting = () => {
    const { budgetData, setBudgetData } = useContext(BudgetContext);

    const handleBudgetChange = (category, amount) => {
        setBudgetData(prevState => ({
            ...prevState,
            [category]: amount
        }));
    };

    return (
        <div className="budget-setting">
            <h2>Budget Setting</h2>
            <div>
                <label>Groceries:</label>
                <input
                    type="number"
                    value={budgetData.groceries}
                    onChange={(e) => handleBudgetChange('groceries', parseInt(e.target.value))}
                />
            </div>
            <div>
                <label>Utilities:</label>
                <input
                    type="number"
                    value={budgetData.utilities}
                    onChange={(e) => handleBudgetChange('utilities', parseInt(e.target.value))}
                />
            </div>
        </div>
    );
}

export default BudgetSetting;