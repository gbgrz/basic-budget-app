import React, { useState } from 'react'
import Bottom from './Bottom'
import Top from './Top';

const BudgetApp = () => {

    const [transactions, setTransactions] = useState({
        income: [],
        expense: []
    });

    let budget = {
        month: 'July',
        budget: 0,
        totals: {
            income: 0,
            expense: 0
        },
        calculateTotals: function() {
            let incomeSum = 0, expenseSum = 0;

            transactions.income.forEach((cur) => {
                incomeSum += cur.value;
            });
    
            transactions.expense.forEach((cur) => {
                expenseSum += cur.value;
            });

            this.totals.income = incomeSum;
            this.totals.expense = expenseSum;
        },
        calculateBudget: function() {
            this.budget = this.totals.income - this.totals.expense;
        }
    }

    budget.calculateTotals();
    budget.calculateBudget();

    return (
        <div>
            <Top budget={budget} />
            <Bottom transactions={transactions} setTransactions={setTransactions} budget={budget} />
        </div>
    )
}

export default BudgetApp;