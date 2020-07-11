import React, { useState } from 'react'
import Bottom from './Bottom'
import Top from './Top';

const BudgetApp = () => {

    const [transactions, setTransactions] = useState({
        income: [],
        expense: []
    });

    const [budgetDate, setBudgetDate] = useState(new Date())

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let budget = {
        month: '',
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
        },
        setMonth: function() {

            if (transactions.income.length > 0) {
                this.budgetDate = new Date(transactions.income[0].date);
            } else if (transactions.expense.length > 0) {
                this.budgetDate = new Date(transactions.expense[0].date);
            }
            this.month = `${months[budgetDate.getMonth()]} ${budgetDate.getFullYear()}`;
        }
    }

    budget.calculateTotals();
    budget.calculateBudget();
    budget.setMonth();

    return (
        <div>
            <Top setTransactions={setTransactions} budget={budget} setBudgetDate={setBudgetDate} budgetDate={budgetDate}/>
            <Bottom transactions={transactions} setTransactions={setTransactions} totalIncome={budget.totals.income} budgetDate={budgetDate} />
        </div>
    )
}

export default BudgetApp;