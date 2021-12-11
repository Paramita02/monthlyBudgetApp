import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<div>
			<input
				required='required'
				type='number'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				onClick={() => props.saveButton(value)}
			>
				Save
			</button>
		</div>
	);
};

export default EditBudget;