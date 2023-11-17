import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Curency = () => {

    const { currencyName, currencyChange } = useContext(AppContext);
    

    return (
        <>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="currencySelect">Currency ({currencyName})</label>
            </div>
            <select className="custom-select" id="currencySelect" onChange={currencyChange} style={{ marginLeft: '.3rem' }}>
                <option defaultValue>£ Pound</option>
                <option value="$ " name="dollar">$ Dollar</option>
                <option value="£ " name="pound">£ Pound</option>
                <option value="€ " name="euro">€ Euro</option>
                <option value="₹ " name="ruppee">₹ Ruppee</option>               
            </select>
        </>
    )
}

export default Curency;