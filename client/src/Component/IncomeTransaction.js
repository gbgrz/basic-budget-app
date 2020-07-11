import React from 'react'
import util from '../common/util'

const IncomeTransaction = (props) => {
    
    const { id, description, value, deleteTransaction } = props;

    const { formatNumber } = util;

    return (
        <div className="item clearfix" id={id}>
            <div className="item__description">{props.description}</div>
            <div className="right clearfix">
                <div className="item__value">{formatNumber(props.value)}</div>
                <div className="item__delete" onClick={(event) => deleteTransaction(event, { id, description, value })}>
                    <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}

export default IncomeTransaction;