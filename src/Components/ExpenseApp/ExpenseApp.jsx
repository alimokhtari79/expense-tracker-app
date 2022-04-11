import { useEffect, useState } from 'react';
import OverView from '../OverView/OverView';
import Transactions from '../Transactions/Transactions';
import style from './ExpenseApp.module.css';
const ExpenseApp = () => {
	const [transActions, setTransActions] = useState([]);
	const [expense, setExpense] = useState(0);
	const [income, setIncome] = useState(0);

	const addTransaction = (transaction) => {
		setTransActions([...transActions, transaction]);
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
	}, [transActions]);

	return (
		<section>
			<OverView
				expense={expense}
				income={income}
				addTransaction={addTransaction}
			/>
			<Transactions transActions={transActions} />
		</section>
	);
};

export default ExpenseApp;
