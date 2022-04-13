import { useEffect, useState } from 'react';
import OverView from '../OverView/OverView';
import Transactions from '../Transactions/Transactions';
import style from './ExpenseApp.module.css';
const ExpenseApp = () => {
	// -------------------State-------------------
	const [transActions, setTransActions] = useState([]);
	const [FilterTransactions, setFilterTransactions] = useState([]);
	const [expense, setExpense] = useState(0);
	const [income, setIncome] = useState(0);
	const [selectedOptions, setSelectedOptions] = useState('All');

	// -------------------State-------------------

	// -------------------Handlers-------------------
	const addTransaction = (transaction) => {
		setTransActions([...transActions, transaction]);
	};

	const deleteHandler = (id) => {
		const filterDeleteTransactions = transActions.filter(
			(transaction) => transaction.id !== id
		);
		setTransActions(filterDeleteTransactions);
	};

	useEffect(() => {
		let exp = 0;
		let inc = 0;
		transActions.forEach((transaction) => {
			transaction.type === 'expense'
				? (exp = exp + parseFloat(transaction.amount))
				: (inc = inc + parseFloat(transaction.amount));
		});
		setExpense(exp);
		setIncome(inc);
		filteredTransactions(selectedOptions.value);
	}, [transActions, selectedOptions]);

	useEffect(() => {}, [transActions]);

	const filteredTransactions = (status) => {
		switch (status) {
			case 'Income':
				setFilterTransactions(
					transActions.filter((transaction) => transaction.type === 'income')
				);
				break;
			case 'Expense':
				setFilterTransactions(
					transActions.filter((transaction) => transaction.type === 'expense')
				);
				break;
			default:
				setFilterTransactions(transActions);
		}
	};

	const selectedHandler = (e) => {
		const selectedStatus = e.value;
		setSelectedOptions(e);
		filteredTransactions(selectedStatus);
	};
	// -------------------Handlers-------------------

	return (
		<section>
			<OverView
				expense={expense}
				income={income}
				addTransaction={addTransaction}
			/>
			<Transactions
				transActions={FilterTransactions}
				onDelete={deleteHandler}
				selectedHandler={selectedHandler}
				selectedOptions={selectedOptions}
			/>
		</section>
	);
};

export default ExpenseApp;
