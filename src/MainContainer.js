import React from 'react';
import './MainContainer.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './Budget';
import SpendSoFar from './SpendSoFar';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import RemainingBudget from './RemainingBudget';

const MainContainer = () => {
	return (
		<AppProvider>
            <div className="Main">
        
        <div className="component"><h1>My Budget Planner</h1></div>
        <div className="component"><Budget/></div>  
        <div className="component"><RemainingBudget/></div>
        <div className="component"><SpendSoFar/></div>     
        <div className="component"><ExpenseList/></div>
        <div className="component"><AddExpenseForm/></div>       
        
        </div>
		
		</AppProvider>
	);
};

export default MainContainer;

/*
 <div className="component"><RemainingBudget/></div>
        <div className="component"><SpenSoFar/></div>
	<div className='Main'>
				<h1 className="component">My Budget Planner</h1>
				<div className="component">
						<Budget />
					</div>
                    <div className="component">
						<RemainingBudget />
					</div>
                    <div className="component">
						<ExpenseTotal />
					</div>
				
                    <div className="component"><h3 className='mt-3'>Expenses</h3></div>
                    <div className="component">
						<ExpenseList />
					</div>
				
                    <div className="component">	<h3 className='mt-3'>Add Expense</h3> </div>
                    <div className="component">
						<AddExpenseForm />
					</div>
			
			</div>
            */