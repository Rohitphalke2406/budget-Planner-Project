// FinancialMonitoring.js
import React, { useContext } from 'react';
import { BudgetContext } from '../App';

const FinancialMonitoring = () => {
    const { budgetData } = useContext(BudgetContext);

    const calculateRemainingBudget = (category) => {
        return budgetData[category];
    };

    return (
        <div className="financial-monitoring">
            <h2>Financial Monitoring</h2>
            <div>
                <p>Groceries Remaining Budget: ${calculateRemainingBudget('groceries')}</p>
                <p>Utilities Remaining Budget: ${calculateRemainingBudget('utilities')}</p>
            </div>
        </div>
    );
}

export default FinancialMonitoring;