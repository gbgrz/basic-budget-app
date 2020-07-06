import React from 'react'

function Top(props) {

    const { month, budget, totals } = props.budget 

    const displayPercentage = () => {
        if (totals.income === 0 ) {
            return '---';
        } else {
            return `${Math.round((totals.expense / totals.income) * 100)}%`;
        }
    }

    return (
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{month}</span>:
                </div>
                
                <div className="budget__value">{budget}</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">{totals.income}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">{totals.expense}</div>
                        <div className="budget__expenses--percentage">{displayPercentage()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;