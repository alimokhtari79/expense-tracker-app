import style from './Transaction.module.css';

const Transaction = ({ transaction, onDelete }) => {
	return (
		<div className={style.transaction}>
			<div className={style.transaction_left}>
				<button onClick={onDelete}>delete</button>
				<p>{transaction.desc}</p>
			</div>
			<div
				className={`${
					transaction.type === 'income'
						? style.transactionIncomeAmount
						: style.transactionExpenseAmount
				}`}
			>
				{`${transaction.type === 'income' ? '+' : '-'}$${transaction.amount}`}
			</div>
		</div>
	);
};

export default Transaction;
