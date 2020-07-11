import React from 'react'
import util from '../common/util'

function Top(props) {

    const { budgetDate, setBudgetDate } = props;
    const { month, budget, totals } = props.budget 

    const { formatNumber, displayPercentage } = util;

    const incrementMonth = async () => {
        const nextMonth = new Date(budgetDate.setMonth(budgetDate.getMonth() + 1));
        setBudgetDate(nextMonth);
    }

    const decrementMonth = async () => {
        const prevMonth = new Date(budgetDate.setMonth(budgetDate.getMonth() - 1));
        setBudgetDate(prevMonth);
    }

    return (
        <div className="top">
            
            <div className="budget">
                <button className="budget__prev__btn" onClick={decrementMonth}><i className="ion-android-arrow-back"></i></button>
                <button className="budget__next__btn" onClick={incrementMonth}><i className="ion-android-arrow-forward"></i></button>
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{month}</span>:
                </div>
                
                <div className="budget__value">{formatNumber(budget)}</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">{formatNumber(totals.income, 'inc')}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">{formatNumber(totals.expense)}</div>
                        <div className="budget__expenses--percentage">{displayPercentage(totals.income, totals.expense)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;