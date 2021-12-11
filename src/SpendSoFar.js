import React, { useContext } from 'react';
import './TotalExpense.css';
import { AppContext } from './context/AppContext';

const SpenSoFar = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='spendSoFarDiv'>
			<span>Spent so far: ${total}</span>
		</div>
	);
};

export default SpenSoFar;