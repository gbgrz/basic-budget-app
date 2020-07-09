import React, { useEffect } from 'react'
import Add from './Add';
import Income from './Income';
import Expenses from './Expenses';
import api from '../api/api';

const Bottom = (props) => {

    const { transactions, setTransactions, budget } = props;

    useEffect(() => {
        async function fetch() {
            const data = await api.transactions.get();
            setTransactions(data);
          }
      
        fetch()

    }, [setTransactions])

    const addTransaction = async (transaction) => {
        const newTransaction = await api.transactions.create({ ...transaction, date: '2020-07-01' });

        if (transaction.type === 'inc') {
            setTransactions({
                income: [...transactions.income, { id: newTransaction.id, description: transaction.description, value: transaction.value }],
                expense: transactions.expense
            });
        } else {
            setTransactions({
                income: transactions.income,
                expense: [...transactions.expense, { id: newTransaction.id, description: transaction.description, value: transaction.value }]
            });
        }
    }

    const deleteTransaction = async (event, item) => {

        await api.transactions.delete(item.id);

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