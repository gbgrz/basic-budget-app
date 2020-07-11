import React from 'react'
import ExpenseTransaction from './ExpenseTransaction';
import util from '../common/util';

const Expenses = (props) => {

    const { transactions, totalIncome, deleteTransaction } = props;

    const { displayPercentage } = util;

    const renderExpenses = (expenses, totalBudget) => {
        return expenses.map((t, i) => {
            return (<ExpenseTransaction key={t.id} id={t.id} description={t.description} value={t.value} percentage={displayPercentage(totalBudget, t.value)} deleteTransaction={deleteTransaction} />);
        });
    }

    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            
            <div className="expenses__list">
                
                {renderExpenses(transactions, totalIncome)}

            </div>
        </div>
    )
}

export default Expenses;