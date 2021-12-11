import React from 'react';
import './ExpenseList.css';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: ${props.budget}</span>
			<button className='editButton' type='button' onClick={props.editButton}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;