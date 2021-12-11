import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import './ExpenseList.css';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
       // console.log("ID::"+props.id);
		dispatch({
			type: 'DELETE_EXPENSE',
			id: props.id,
		});
	};

   	return (
        <>
            <table className='tableValues'>
            <tr className='rowData'>
                <td>
                    <span>{props.name}</span>
                </td>
                <td className='costData'>
                    ${props.cost}
                </td >
                <td > <button className='delButton' onClick={handleDeleteExpense}>X</button></td>

                </tr> 
            </table>
        </>
	);
};

export default ExpenseItem;

