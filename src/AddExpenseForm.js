import React, { useContext, useState } from 'react';
import './AddExpenseForm.css';
import { AppContext } from './context/AppContext';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (e) => {
		
		e.preventDefault();
		const expense = {
			id: props.id,
			name,
			cost:parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			id: expense,
		});

		setName('');
		setCost('');
	};

	return (
        <form onSubmit={onSubmit}>
        <div>
           
           <h3>Add Expense</h3> 
           
            <ul className="addExpense">
                <li>Name</li>
                <li>Cost</li>
                <li><input
						required='required'
						type='text'
						className='inputDataAdd'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
                </li>                
                <li><input
						required='required'
						type='number'
						className='inputDataAdd'						
						id='cost'
						value={cost}
						onChange={(e) => setCost(e.target.value)}
					/>
                </li>
            </ul>
            <p><button type='submit' className="saveButton" >Save</button> </p>             
           
        </div> 
        </form>
		
			
	);
};

export default AddExpenseForm;

/*
<div >
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
*/