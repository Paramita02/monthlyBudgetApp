import React, { useState, useContext } from 'react';
import './BudgetComponent.css';
import ViewBudget from '../ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState(budget);

	const editButton = () => {
		setIsEditing(true);
	};

	const saveButton = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			id: value
		});
		setIsEditing(false);
	};

	return (
		<div className="budgetDiv">
			
			{isEditing ? (
				<EditBudget saveButton={saveButton} budget={budget} />				
			) : (
				<ViewBudget editButton={editButton} budget={budget} />
				
			)}
				
		
		</div>
	);
};

export default Budget;

//
/*
{isEditing ? (
				<EditBudget saveButton={saveButton} budget={budget} />				
			) : (
				<ViewBudget editButton={editButton} budget={budget} />
				
			)}
*/
//