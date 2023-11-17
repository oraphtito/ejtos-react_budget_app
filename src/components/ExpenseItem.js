import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
//import { SiAddthis } from "react-icons/si";
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseItem = (props) => {
    const { dispatch, currencyName } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: +10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currencyName}{props.cost}</td>
            <td>
                <MdAddCircle size='2em' color='green' onClick={event => increaseAllocation(props.name)}></MdAddCircle>
            </td>
            <td>
                <MdRemoveCircle size='2em' color='red' onClick={event => decreaseAllocation(props.name)} ></MdRemoveCircle>
            </td>

            <td><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
