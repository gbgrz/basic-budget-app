import React from 'react';
import IncomeTransaction from './IncomeTransaction';

const Income = (props) => {

    const {transactions, deleteTransaction } = props;

    const renderIncome = (income) => {
        return income.map((t, i) => {
            return (<IncomeTransaction key={t.id} id={t.id} description={t.description} value={t.value} deleteTransaction={deleteTransaction}/>);
        });
    }

    return (
        <div className="income">
            <h2 className="icome__title">Income</h2>
            
            <div className="income__list">
                
                {renderIncome(transactions)}
                
            </div>
        </div>
    );
}

export default Income;