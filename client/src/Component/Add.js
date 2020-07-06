import React, { useState } from 'react'

const Add = (props) => {

    const [redFocus, setRedFocus] = useState(false);

    const { addTransaction } = props;

    const DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    };

    const addNew = () => {
        const input = getInput();
        if (input.description && input.value) {
            addTransaction(input);
            clearInput();
        }
    }

    const enterPressed = (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            addNew();
        }
    }

    const getInput = () => {
        return {
            type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: parseFloat(document.querySelector('.add__value').value)
        };
    }

    const clearInput = () => {

        document.querySelector(DOMstrings.inputDescription).value = "";
        document.querySelector(DOMstrings.inputValue).value = "";
    }

    return (
        <div className="add">
            <div className="add__container" onKeyPress={enterPressed}>
                <select className={`add__type ${redFocus && "red-focus"}`} defaultValue="inc" onChange={() => setRedFocus(!redFocus) }>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input type="text" className={`add__description ${redFocus && "red-focus"}`} placeholder="Add description" />
                <input type="number" className={`add__value ${redFocus && "red-focus"}`} placeholder="Value" />
                <button className={`add__btn ${redFocus && "red"}`} onClick={addNew}><i className="ion-ios-checkmark-outline"></i></button>
            </div>
        </div>
    )
}

export default Add;