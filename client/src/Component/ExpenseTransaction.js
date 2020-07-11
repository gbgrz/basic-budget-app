import React from 'react'
import util from '../common/util'

const ExpenseTransaction = (props) => {

    const { id, description, value, percentage, deleteTransaction } = props;

    const { formatNumber } = util;

    return (
        <div className="item clearfix" id={`expense-${id}`}>
            <div className="item__description">{description}</div>
            <div className="right clearfix">
                <div className="item__value">{formatNumber(value)}</div>
                <div className="item__percentage">{percentage}</div>
                <div className="item__delete" onClick={(event) => deleteTransaction(event, { id, description, value })}>
                    <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ExpenseTransaction;