import React, { useContext, useState, useEffect } from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { AppContext } from './context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<div className='expDiv'>
            <h2>Expenses </h2>
			<input
				type='text'
				class='inputSearch'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul >
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</div>
	);
};

export default ExpenseList;