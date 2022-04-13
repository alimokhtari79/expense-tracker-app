import React, { useState } from 'react';
import style from './AddForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddForm = ({ addTransaction }) => {
	const [transaction, setTransaction] = useState({
		id: null,
		desc: '',
		amount: '',
		type: 'income',
	});

	const changeHandler = (e) => {
		setTransaction({
			...transaction,
			[e.target.name]: e.target.value,
			id: Date.now(),
		});
	};

	const submitTransaction = (e) => {
		e.preventDefault();
		if (e.target.desc.value === '') {
			warnNotify();
		} else if (e.target.amount.value === '' || e.target.amount.value === '0') {
			warnNotify();
		} else {
			successNotify();
			addTransaction(transaction);
			setTransaction({ id: null, desc: '', amount: 0, type: 'income' });
		}
	};

	const successNotify = () =>
		toast.success('Add New Transaction', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
		});

	const warnNotify = () => {
		toast.warn('Description or Amount not completed !', {
			position: 'top-right',
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<form
			onSubmit={(e) => {
				submitTransaction(e);
			}}
		>
			<div className={style.formText}>
				<input
					type="text"
					name="desc"
					placeholder="Description"
					className={style.formText_input}
					value={transaction.desc}
					onChange={changeHandler}
					autoComplete="off"
				/>
				<input
					type="number"
					name="amount"
					placeholder="Amount"
					className={style.formText_input}
					value={transaction.amount}
					onChange={changeHandler}
				/>
			</div>

			<div className={style.radioBtns}>
				<div>
					<input
						type="radio"
						name="type"
						value="income"
						id="income"
						onChange={changeHandler}
						checked={transaction.type === 'income'}
					/>
					<label htmlFor="income">Income</label>
				</div>
				<div>
					<input
						type="radio"
						name="type"
						value="expense"
						id="expense"
						onChange={changeHandler}
						checked={transaction.type === 'expense'}
					/>
					<label htmlFor="expense">Expense</label>
				</div>
			</div>
			<div className={style.addTransaction_container}>
				<button type="submit" className={style.addTransaction_Btn}>
					ADD TRANSACTION
				</button>
			</div>
			<ToastContainer />
		</form>
	);
};

export default AddForm;
