import React from 'react'
import ExpenseTransaction from './ExpenseTransaction';

const Expenses = (props) => {

    const { transactions, budget, deleteTransaction } = props;

    const displayPercentage = (value, totalBudget) => {
        if (totalBudget <= 0) {
            return '---';
        } else {
            return `${Math.round((value / totalBudget) * 100)}%`;
        }
    }

    const renderExpenses = (expenses, totalBudget) => {
        return expenses.map((t, i) => {
            return (<ExpenseTransaction key={t.id} id={t.id} description={t.description} value={t.value} percentage={displayPercentage(t.value, totalBudget)} deleteTransaction={deleteTransaction} />);
        });
    }

    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            
            <div className="expenses__list">
                
                {renderExpenses(transactions, budget.totals.income)}

            </div>
        </div>
    )
}

export default Expenses;