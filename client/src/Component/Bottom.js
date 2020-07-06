import React from 'react'
import Add from './Add';
import Income from './Income';
import Expenses from './Expenses';

const Bottom = (props) => {

    const { transactions, setTransactions, budget } = props;

    const addTransaction = (transaction) => {
        let id = 0;

        if (transaction.type === 'inc') {

            if (transactions.income.length > 0) {
                id = transactions.income[transactions.income.length - 1].id + 1;
            }

            setTransactions({
                income: [...transactions.income, { id: `income-${id}`, description: transaction.description, value: transaction.value }],
                expense: transactions.expense
            });
        } else {

            if (transactions.expense.length > 0) {
                id = transactions.expense[transactions.expense.length - 1].id + 1;
            }

            setTransactions({
                income: transactions.income,
                expense: [...transactions.expense, { id: `expense-${id}`, description: transaction.description, value: transaction.value }]
            });
        }
    }

    const deleteTransaction = (event, item) => {

        setTransactions({
            income: transactions.income.filter(t => t.id !== item.id),
            expense: transactions.expense.filter(t => t.id !== item.id)
        })
    }

    return (
        <div className="bottom">
            
            <Add addTransaction={addTransaction}/>

            <div className="container clearfix">
                
                <Income transactions={transactions.income} deleteTransaction={deleteTransaction}/>
                
                <Expenses transactions={transactions.expense} budget={budget} deleteTransaction={deleteTransaction}/>
                
            </div>
        </div>
    )
}

export default Bottom;