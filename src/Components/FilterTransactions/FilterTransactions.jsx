import React from 'react';
import Select from 'react-select';
import style from './FilterTransactions.module.css';

const options = [
	{ value: 'All', label: 'All' },
	{ value: 'Income', label: 'Income' },
	{ value: 'Expense', label: 'Expense' },
];

const customStyles = {
	option: (provided) => ({
		...provided,
		color: '#1f2732',
		padding: 10,
	}),
	control: () => ({
		// none of react-select's styles are passed to <Control />
		width: 140,
		display: 'flex',
		// border: '1px solid #1f2732',
		borderRadius: '0.5rem',
		backgroundColor: '#f2f2f2',
	}),
};

const FilterTransactions = ({
	transActions,
	selectedOptions,
	selectedHandler,
}) => {
	return (
		<>
			{!transActions.length ? (
				''
			) : (
				<Select
					styles={customStyles}
					onChange={selectedHandler}
					value={selectedOptions}
					options={options}
				/>
			)}
		</>
	);
};

export default FilterTransactions;
