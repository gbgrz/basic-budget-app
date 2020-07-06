import React from 'react'

const IncomeTransaction = (props) => {
    
    const { id, description, value, deleteTransaction } = props;

    return (
        <div className="item clearfix" id={`income-${id}`}>
            <div className="item__description">{props.description}</div>
            <div className="right clearfix">
                <div className="item__value">{props.value}</div>
                <div className="item__delete" onClick={(event) => deleteTransaction(event, { id, description, value })}>
                    <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}

export default IncomeTransaction;